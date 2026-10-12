// Shared by the contact form (instant feedback) and the server action
// (authoritative check).

export type ContactFields = { name: string; email: string; message: string };
export type ContactErrors = Partial<Record<keyof ContactFields, string>>;

export const limits = { name: 100, email: 200, message: 5000 };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function readFields(formData: FormData): ContactFields {
  const get = (key: string) => {
    const v = formData.get(key);
    return typeof v === "string" ? v.trim() : "";
  };
  return { name: get("name"), email: get("email"), message: get("message") };
}

export function validate(fields: ContactFields): ContactErrors {
  const errors: ContactErrors = {};
  if (!fields.name) errors.name = "Please enter your name.";
  else if (fields.name.length > limits.name) errors.name = "That name is a little too long.";

  if (!fields.email) errors.email = "Please enter your email address.";
  else if (!EMAIL.test(fields.email) || fields.email.length > limits.email)
    errors.email = "Please enter a valid email address, like name@example.com.";

  if (!fields.message) errors.message = "Please write a message.";
  else if (fields.message.length < 10) errors.message = "Could you add a bit more detail? (10 characters minimum)";
  else if (fields.message.length > limits.message)
    errors.message = `Please keep your message under ${limits.message} characters.`;

  return errors;
}

export type ContactState =
  | { status: "idle" }
  | { status: "invalid"; errors: ContactErrors; values: ContactFields }
  | { status: "success" }
  | { status: "unavailable"; values: ContactFields }
  | { status: "failed"; values: ContactFields };
