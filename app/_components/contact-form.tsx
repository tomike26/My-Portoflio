"use client";

import { useActionState, useState } from "react";
import { sendContactMessage } from "../_lib/contact-action";
import {
  limits,
  readFields,
  validate,
  type ContactErrors,
  type ContactFields,
  type ContactState,
} from "../_lib/contact-validation";
import { Icon } from "./icon";

const empty: ContactFields = { name: "", email: "", message: "" };

const fields: {
  name: keyof ContactFields;
  label: string;
  type?: string;
  autoComplete: string;
  multiline?: boolean;
}[] = [
  { name: "name", label: "Your name", autoComplete: "name" },
  { name: "email", label: "Email address", type: "email", autoComplete: "email" },
  { name: "message", label: "Message", autoComplete: "off", multiline: true },
];

export function ContactForm({ enabled, email }: { enabled: boolean; email: string }) {
  // Validate in the browser first for instant feedback; the server action
  // validates again before anything is sent.
  const [state, formAction, pending] = useActionState<ContactState, FormData>(
    async (prev, formData) => {
      const values = readFields(formData);
      const errors = validate(values);
      if (Object.keys(errors).length > 0) return { status: "invalid", errors, values };
      return sendContactMessage(prev, formData);
    },
    { status: "idle" },
  );
  // Fields the visitor has edited since the last submission lose their error.
  const [edited, setEdited] = useState<{ for: ContactState; fields: (keyof ContactFields)[] }>({
    for: state,
    fields: [],
  });
  const editedNow = edited.for === state ? edited.fields : [];

  const values = "values" in state ? state.values : empty;
  const errors: ContactErrors = state.status === "invalid" ? state.errors : {};
  const errorFor = (f: keyof ContactFields) => (editedNow.includes(f) ? undefined : errors[f]);

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-line bg-bg/70 p-8">
        <span className="flex size-10 items-center justify-center rounded-full bg-blue text-on-blue"><Icon name="check" className="size-5" /></span>
        <p className="mt-6 text-2xl font-semibold tracking-[-0.03em]">Thank you. Your message is on its way.</p>
        <p className="mt-3 text-muted">I&apos;ll reply to the email address you gave as soon as I can.</p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="rounded-2xl border border-line bg-bg/70 p-6 sm:p-8">
      {!enabled && (
        <p id="contact-form-unavailable" className="mb-7 rounded-xl border border-line bg-surface px-4 py-3 text-sm text-muted">
          The form isn&apos;t accepting messages at the moment. Please write to{" "}
          <a href={`mailto:${email}`} className="text-blue underline underline-offset-2">
            {email}
          </a>{" "}
          instead.
        </p>
      )}

      <fieldset
        disabled={!enabled || pending}
        aria-describedby={enabled ? undefined : "contact-form-unavailable"}
        className="space-y-6 disabled:opacity-60"
      >
        <legend className="sr-only">Send a message</legend>
        {fields.map((f) => {
          const error = errorFor(f.name);
          const id = `contact-${f.name}`;
          const props = {
            id,
            name: f.name,
            defaultValue: values[f.name],
            autoComplete: f.autoComplete,
            required: true,
            maxLength: limits[f.name],
            "aria-invalid": error ? true : undefined,
            "aria-describedby": error ? `${id}-error` : undefined,
            onInput: () => {
              if (errors[f.name] && !editedNow.includes(f.name))
                setEdited({ for: state, fields: [...editedNow, f.name] });
            },
            className: `mt-2 block w-full rounded-xl border bg-surface px-4 py-3 text-text transition-[border-color,box-shadow] duration-200 placeholder:text-faint focus:outline-none disabled:cursor-not-allowed ${error ? "border-error focus:shadow-[0_0_0_4px_rgb(255_122_122/0.15)]" : "border-field focus:border-blue focus:shadow-[0_0_0_4px_rgb(79_139_255/0.18)]"}`,
          };
          return (
            <div key={f.name}>
              <label htmlFor={id} className="text-sm font-medium">
                {f.label}
              </label>
              {f.multiline ? (
                <textarea {...props} rows={4} className={`${props.className} resize-y`} />
              ) : (
                <input {...props} type={f.type ?? "text"} />
              )}
              {error && (
                <p id={`${id}-error`} className="mt-2 text-sm text-error">
                  {error}
                </p>
              )}
            </div>
          );
        })}

        {/* Honeypot for bots: hidden from people and assistive tech. */}
        <div aria-hidden="true" className="hidden">
          <label>
            Company
            <input name="company" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <button
          type="submit"
          className="group inline-flex h-12 items-center gap-2 rounded-full bg-blue px-6 font-medium text-on-blue transition-colors duration-300 hover:bg-blue-light disabled:pointer-events-none"
        >
          {pending ? "Sending…" : "Send message"}
          {!pending && <Icon name="arrowRight" className="size-4 transition-transform group-hover:translate-x-0.5" />}
        </button>
      </fieldset>

      <div aria-live="polite">
        {state.status === "invalid" && (
          <p className="mt-6 text-sm text-error">A few details need another look. They&apos;re marked above.</p>
        )}
        {state.status === "unavailable" && (
          <p className="mt-6 text-sm text-error">
            Your message wasn&apos;t sent because the form isn&apos;t connected to a delivery service yet. Please email{" "}
            {email} instead.
          </p>
        )}
        {state.status === "failed" && (
          <p className="mt-6 text-sm text-error">
            Something went wrong and your message wasn&apos;t sent. Please try again, or email {email}.
          </p>
        )}
      </div>
    </form>
  );
}
