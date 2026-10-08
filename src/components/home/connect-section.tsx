import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FormStatus } from "@/components/forms/form-status";
import { useFormSubmit } from "@/hooks/use-form-submit";
import { formspree } from "@/lib/site";

export function ConnectSection() {
  const [email, setEmail] = useState("");
  const { status, submit, honeypotProps } = useFormSubmit(formspree.newsletter);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const ok = await submit({ email, _subject: "Newsletter signup" });
    if (ok) setEmail("");
  };

  return (
    <section id="connect" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Card className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-card py-0 shadow-[var(--shadow-border)]">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <p className="mb-5 text-xs tracking-[0.22em] text-primary uppercase">Connect</p>
                <h2 className="font-serif text-3xl font-semibold md:text-4xl">
                  Begin Your <span className="text-primary">Journey</span>
                </h2>
                <p className="mt-4 mb-8 leading-relaxed text-muted-foreground">
                  Join our community of seekers and receive updates on new scrolls, teachings,
                  seminars, and spiritual insights directly to your inbox.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input {...honeypotProps} />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="min-h-11 bg-secondary"
                  />
                  <Button
                    type="submit"
                    disabled={status === "submitting"}
                    className="min-h-11 w-full rounded-full"
                  >
                    {status === "submitting" ? "Subscribing…" : "Subscribe to Updates"}
                  </Button>
                  <FormStatus status={status} successMessage="You're subscribed. Thank you!" />
                </form>
                <p className="mt-4 text-xs text-muted-foreground">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
              <div className="flex items-center justify-center bg-secondary p-8 md:p-12">
                <div className="text-center">
                  <p className="font-serif text-lg text-muted-foreground italic">
                    “The light shines in the darkness, and the darkness has not overcome it.”
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">— John 1:5</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
