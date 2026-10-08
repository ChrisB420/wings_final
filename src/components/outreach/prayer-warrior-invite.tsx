import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormStatus } from "@/components/forms/form-status";
import { useFormSubmit } from "@/hooks/use-form-submit";
import { outreachMotto } from "@/lib/content/outreach";
import { formspree, siteConfig } from "@/lib/site";

export function PrayerWarriorInvite() {
  const [form, setForm] = useState({ name: "", email: "", prayer: "" });
  const { status, submit, honeypotProps, errorMessage } = useFormSubmit(formspree.warriorSignup);
  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const ok = await submit({ ...form, _subject: "Prayer warrior signup" });
    if (ok) setForm({ name: "", email: "", prayer: "" });
  }

  return (
    <div className="rounded-2xl bg-card p-8 text-center shadow-[var(--shadow-border)]">
      <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
        Ignite Mombasa with Christ's Light – Join TEOM Outreach!
      </h2>
      <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
        Grace and boundless joy in the name of Jesus Christ! We're calling warriors to spread
        the Flame of Christ further, “{outreachMotto}”
      </p>
      <ul className="mx-auto mt-6 mb-6 max-w-2xl space-y-2 text-left text-foreground/85">
        <li>
          <strong>Join Our Outreaches</strong>: Be part of Saturday market evangelism or Sunday
          after-service events.
        </li>
        <li>
          <strong>Become a Prayer Warrior</strong>: We're calling five warriors per church to
          intercede for revival.
        </li>
        <li>
          <strong>Partner with Your Church</strong>: Unite your congregation with TEOM's
          mission.
        </li>
      </ul>
      <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-3">
        <input {...honeypotProps} />
        <Input
          placeholder="Your Name"
          value={form.name}
          onChange={update("name")}
          className="min-h-11 bg-secondary"
          required
        />
        <Input
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={update("email")}
          className="min-h-11 bg-secondary"
          required
        />
        <Textarea
          placeholder="Your Prayer Request"
          value={form.prayer}
          onChange={update("prayer")}
          className="bg-secondary"
        />
        <Button type="submit" disabled={status === "submitting"} className="min-h-12 w-full rounded-full">
          {status === "submitting" ? "Sending…" : "Sign Up as Prayer Warrior"}
        </Button>
        <FormStatus
          status={status}
          successMessage="Thank you! Your prayer warrior registration has been received."
          errorMessage={errorMessage}
        />
      </form>
      <p className="mt-6 text-sm text-muted-foreground italic">
        Contact: {siteConfig.email} | {siteConfig.outreachPhone}
      </p>
    </div>
  );
}
