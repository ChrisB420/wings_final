import { createFileRoute } from "@tanstack/react-router";
import { CreditCard, Landmark, MessageCircle, Smartphone } from "lucide-react";
import { CopyButton } from "@/components/forms/copy-button";
import { PageHero } from "@/components/layout/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { giving, siteConfig } from "@/lib/site";

export const Route = createFileRoute("/give")({
  head: () => ({
    meta: [
      { title: `Give | ${siteConfig.name}` },
      {
        name: "description",
        content: "Support the outreach, teachings and mission work of Wings of the Cherubim.",
      },
    ],
  }),
  component: GivePage,
});

function Row({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  return (
    <div className="flex items-center justify-between gap-4 border-b border-border py-2 last:border-0">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="flex items-center gap-3 font-medium">
        {value}
        <CopyButton value={value} label={label} />
      </span>
    </div>
  );
}

function Method({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-card p-6 shadow-[var(--shadow-border)]">
      <h3 className="mb-4 flex items-center gap-3 font-serif text-xl text-primary">
        <Icon className="size-5" /> {title}
      </h3>
      {children}
    </div>
  );
}

const uses = [
  { label: "Outreach apparel", pct: 30, note: "Shirts and hats for the outreach team" },
  { label: "Food & meals", pct: 40, note: "Feeding those we serve and the team" },
  { label: "Logistics", pct: 30, note: "Transport, materials and venues" },
];

function GivePage() {
  const { mpesa, bank, paypalUrl, cardUrl } = giving;
  const hasMpesa = Object.values(mpesa).some(Boolean);
  const hasBank = Object.values(bank).some(Boolean);
  const hasAny = hasMpesa || hasBank || paypalUrl || cardUrl;

  return (
    <SiteShell>
      <PageHero
        kicker="Stewardship"
        title="Give"
        description="Your gift carries the light of Christ further — through outreach, prayer and teaching."
      />
      <section className="px-4 py-16 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          {hasMpesa && (
            <Method icon={Smartphone} title="M-Pesa">
              <Row label="Till number" value={mpesa.tillNumber} />
              <Row label="Paybill" value={mpesa.paybill} />
              <Row label="Account name" value={mpesa.accountName} />
              <Row label="Send to phone" value={mpesa.sendToPhone} />
            </Method>
          )}
          {hasBank && (
            <Method icon={Landmark} title="Bank transfer">
              <Row label="Bank" value={bank.bankName} />
              <Row label="Account name" value={bank.accountName} />
              <Row label="Account number" value={bank.accountNumber} />
              <Row label="SWIFT / BIC" value={bank.swift} />
            </Method>
          )}
          {(paypalUrl || cardUrl) && (
            <Method icon={CreditCard} title="Online">
              <div className="flex flex-wrap gap-3">
                {paypalUrl && (
                  <a
                    href={paypalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center rounded-full bg-primary px-6 font-semibold text-primary-foreground"
                  >
                    Give with PayPal
                  </a>
                )}
                {cardUrl && (
                  <a
                    href={cardUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center rounded-full px-6 font-semibold text-primary shadow-[var(--shadow-border)]"
                  >
                    Give by card
                  </a>
                )}
              </div>
            </Method>
          )}
          {!hasAny && (
            <Method icon={MessageCircle} title="Give by contacting us">
              <p className="mb-5 text-muted-foreground">
                Online giving is being set up. To give now, reach out and we will share the details
                personally.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center rounded-full bg-primary px-6 font-semibold text-primary-foreground"
                >
                  WhatsApp us
                </a>
                <a
                  href={`mailto:${siteConfig.email}?subject=Giving`}
                  className="inline-flex min-h-11 items-center rounded-full px-6 font-semibold text-primary shadow-[var(--shadow-border)]"
                >
                  Email us
                </a>
              </div>
            </Method>
          )}
          <div className="rounded-2xl bg-card p-6 shadow-[var(--shadow-border)]">
            <h3 className="mb-2 font-serif text-xl">Where your gift goes</h3>
            <p className="mb-5 text-sm text-muted-foreground">
              The default split for Mombasa outreach funds:
            </p>
            <ul className="space-y-4">
              {uses.map((u) => (
                <li key={u.label}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>{u.label}</span>
                    <span className="text-primary">{u.pct}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-secondary">
                    <div className="h-full bg-primary" style={{ width: `${u.pct}%` }} />
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{u.note}</p>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            Questions about giving? Write to{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
