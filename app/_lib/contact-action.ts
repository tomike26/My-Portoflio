"use server";

import { profile } from "./content";
import { readFields, validate, type ContactState } from "./contact-validation";

// Sends the message with Resend (https://resend.com) when RESEND_API_KEY is
// set. Without it, the action reports that the form is unavailable instead
// of pretending the message was sent.
export async function sendContactMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const values = readFields(formData);

  // Honeypot: real visitors never see or fill this field.
  if (formData.get("company")) return { status: "success" };

  const errors = validate(values);
  if (Object.keys(errors).length > 0) return { status: "invalid", errors, values };

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { status: "unavailable", values };

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO_EMAIL ?? profile.email],
        reply_to: values.email,
        subject: `Portfolio message from ${values.name}`,
        text: `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`,
      }),
    });
    if (!res.ok) {
      console.error("Contact form: Resend responded with", res.status, await res.text());
      return { status: "failed", values };
    }
    return { status: "success" };
  } catch (error) {
    console.error("Contact form: request failed", error);
    return { status: "failed", values };
  }
}
