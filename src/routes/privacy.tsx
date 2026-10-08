import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/layout/legal-page";
import { SiteShell } from "@/components/layout/site-shell";
import { siteConfig } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy | ${siteConfig.name}` },
      {
        name: "description",
        content: "How Wings of the Cherubim collects, uses and protects your information.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteShell>
      <LegalPage
        title="Privacy Policy"
        updated="September 21, 2026"
        intro="We collect very little, use it only to serve you, and never sell it."
      >
        <div>
          <h2>What we collect</h2>
          <p className="mb-3">
            We only receive information you choose to send us through a form on this site:
          </p>
          <ul>
            <li>
              <strong>Contact form:</strong> your name, email address and message.
            </li>
            <li>
              <strong>Prayer warrior sign-up:</strong> your name, email address and any prayer
              request you include.
            </li>
            <li>
              <strong>Seminar registration and newsletter:</strong> your email address.
            </li>
            <li>
              <strong>Testimonies:</strong> your name, email address, your testimony, and whether
              you allow us to publish it.
            </li>
          </ul>
        </div>
        <div>
          <h2>How we use it</h2>
          <ul>
            <li>To reply to your messages and pray for your requests.</li>
            <li>To send seminar details, Zoom links and ministry updates you asked for.</li>
            <li>To publish a testimony — only if you gave permission, and by first name only.</li>
          </ul>
          <p className="mt-3">
            We do not sell or rent your information, and we do not use it for advertising.
          </p>
        </div>
        <div>
          <h2>Who handles it for us</h2>
          <ul>
            <li>
              <strong>Formspree</strong> receives form submissions and forwards them to our email.
            </li>
            <li>
              <strong>Vercel</strong> hosts this website and provides simple, anonymous page-view
              statistics. It does not track you across other sites.
            </li>
          </ul>
          <p className="mt-3">
            These providers process data on our behalf under their own privacy policies.
          </p>
        </div>
        <div>
          <h2>Cookies and your device</h2>
          <p>
            We do not use advertising or tracking cookies. The Outreach Hub saves its working data
            (schedule, churches, tasks) in your own browser's storage; it stays on your device
            and is not sent to us.
          </p>
        </div>
        <div>
          <h2>How long we keep it</h2>
          <p>
            We keep messages and sign-ups only as long as needed to respond or send what you asked
            for. You can ask us to stop or delete your details at any time.
          </p>
        </div>
        <div>
          <h2>Your choices</h2>
          <p>
            You may ask to see, correct or delete the information we hold about you, or to be
            removed from our updates, by emailing{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. We aim to handle
            personal information in line with applicable data protection laws, including Kenya's
            Data Protection Act, 2019.
          </p>
        </div>
        <div>
          <h2>Children</h2>
          <p>
            This site is not directed at children under 13, and we do not knowingly collect their
            information.
          </p>
        </div>
        <div>
          <h2>Changes</h2>
          <p>
            If we change this policy we will update the date above. Questions? Write to{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
        </div>
      </LegalPage>
    </SiteShell>
  );
}
