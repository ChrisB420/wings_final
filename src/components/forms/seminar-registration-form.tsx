import { useState } from "react";
import { FormStatus } from "@/components/forms/form-status";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormSubmit } from "@/hooks/use-form-submit";
import { formspree } from "@/lib/site";

export function SeminarRegistrationForm() {
  const [email, setEmail] = useState("");
  const { status, submit, honeypotProps, errorMessage } = useFormSubmit(formspree.seminar);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const ok = await submit({ email, _subject: "Seminar registration" });
    if (ok) setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-4">
      <input {...honeypotProps} />
      <Input
        type="email"
        name="email"
        placeholder="Enter your email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="min-h-11 bg-secondary"
      />
      <Button type="submit" disabled={status === "submitting"} className="min-h-12 rounded-full text-base">
        {status === "submitting" ? "Registering…" : "Get Free Access"}
      </Button>
      <FormStatus
        status={status}
        successMessage="Your registration has been received. We'll send the seminar details to your email."
        errorMessage={errorMessage}
      />
    </form>
  );
}
