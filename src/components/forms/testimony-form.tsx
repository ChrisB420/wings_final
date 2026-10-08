import { useState } from "react";
import { FormStatus } from "@/components/forms/form-status";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormSubmit } from "@/hooks/use-form-submit";
import { formspree } from "@/lib/site";

export function TestimonyForm() {
  const blank = { name: "", email: "", testimony: "", canPublish: false };
  const [form, setForm] = useState(blank);
  const { status, submit, honeypotProps } = useFormSubmit(formspree.contact);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const ok = await submit({
      name: form.name,
      email: form.email,
      testimony: form.testimony,
      permissionToPublish: form.canPublish ? "Yes" : "No",
      _subject: "Testimony submission",
    });
    if (ok) setForm(blank);
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-4 text-left">
      <input {...honeypotProps} />
      <Input
        placeholder="Your name"
        required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="min-h-11 bg-secondary"
      />
      <Input
        type="email"
        placeholder="Your email (never published)"
        required
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="min-h-11 bg-secondary"
      />
      <Textarea
        rows={5}
        placeholder="What did God do?"
        required
        value={form.testimony}
        onChange={(e) => setForm({ ...form, testimony: e.target.value })}
        className="bg-secondary"
      />
      <label className="flex items-start gap-3 text-sm text-muted-foreground">
        <input
          type="checkbox"
          checked={form.canPublish}
          onChange={(e) => setForm({ ...form, canPublish: e.target.checked })}
          className="mt-1 size-4"
        />
        You may share my testimony on this website (first name only).
      </label>
      <Button type="submit" disabled={status === "submitting"} className="min-h-12 w-full rounded-full">
        {status === "submitting" ? "Sending…" : "Share Testimony"}
      </Button>
      <FormStatus status={status} successMessage="Thank you for sharing. God bless you!" />
    </form>
  );
}
