import { useState } from "react";
import { FormStatus } from "@/components/forms/form-status";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormSubmit } from "@/hooks/use-form-submit";
import { formspree, siteConfig } from "@/lib/site";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { status, submit, honeypotProps, errorMessage } = useFormSubmit(formspree.contact);
  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const ok = await submit({ ...form, _subject: "Website contact form" });
    if (ok) setForm({ name: "", email: "", message: "" });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input {...honeypotProps} />
      <Input
        name="name"
        placeholder="Your Name"
        required
        value={form.name}
        onChange={update("name")}
        className="min-h-11 bg-secondary"
      />
      <Input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        value={form.email}
        onChange={update("email")}
        className="min-h-11 bg-secondary"
      />
      <Textarea
        name="message"
        placeholder="Your Message"
        rows={6}
        required
        value={form.message}
        onChange={update("message")}
        className="bg-secondary"
      />
      <Button type="submit" disabled={status === "submitting"} className="min-h-12 w-full rounded-full">
        {status === "submitting" ? "Sending…" : "Send Message"}
      </Button>
      <FormStatus
        status={status}
        successMessage="Thank you — your message has been sent. We'll be in touch soon."
        errorMessage={`${errorMessage} You can also email us at ${siteConfig.email}.`}
      />
    </form>
  );
}
