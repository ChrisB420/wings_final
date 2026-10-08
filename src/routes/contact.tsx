import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { PageHero } from "@/components/layout/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { siteConfig } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact | ${siteConfig.name}` },
      {
        name: "description",
        content:
          "Reach out to Wings of the Cherubim for ministry inquiries, outreach, seminars, teachings, or partnership opportunities.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        kicker="Connect"
        title={`Contact ${siteConfig.name}`}
        description="Reach out for ministry inquiries, outreach, seminars, teachings, or partnership opportunities."
      />
      <section className="px-4 py-16 md:px-6">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <a
              href={`tel:${siteConfig.phone.tel}`}
              className="flex items-center gap-3 rounded-2xl bg-card p-5 shadow-[var(--shadow-border)]"
            >
              <Phone className="size-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">{siteConfig.phone.display}</p>
              </div>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 rounded-2xl bg-card p-5 shadow-[var(--shadow-border)]"
            >
              <Mail className="size-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{siteConfig.email}</p>
              </div>
            </a>
            <a
              href={siteConfig.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl bg-card p-5 shadow-[var(--shadow-border)]"
            >
              <p className="text-sm text-muted-foreground">Website</p>
              <p className="font-medium text-primary">{siteConfig.domain}</p>
            </a>
          </div>
          <div className="rounded-2xl bg-card p-6 shadow-[var(--shadow-border)] md:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
