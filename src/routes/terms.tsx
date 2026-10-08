import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage } from "@/components/layout/legal-page";
import { SiteShell } from "@/components/layout/site-shell";
import { siteConfig } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: `Terms of Use | ${siteConfig.name}` },
      { name: "description", content: "The terms for using the Wings of the Cherubim website." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteShell>
      <LegalPage
        title="Terms of Use"
        updated="September 21, 2026"
        intro="Simple ground rules for using this website."
      >
        <div>
          <h2>Using this site</h2>
          <p>
            By using {siteConfig.domain} you agree to these terms. Please use the site lawfully and
            respectfully, and do not attempt to disrupt it or send spam through its forms.
          </p>
        </div>
        <div>
          <h2>Our teachings</h2>
          <p>
            The scrolls, teachings and seminars express this ministry's understanding of
            Scripture, offered for study and encouragement. We invite you to test everything against
            the Bible for yourself. They are not a substitute for medical, legal or financial advice.
          </p>
        </div>
        <div>
          <h2>Sharing our content</h2>
          <p>
            You are welcome to share the scrolls and teachings freely, in their original, unaltered
            form and with credit to Wings of the Cherubim. Please ask us first before selling them,
            changing them, or using them under another name. Photos of people are used with care —
            contact us if you would like one removed.
          </p>
        </div>
        <div>
          <h2>What you send us</h2>
          <p>
            Prayer requests, messages and testimonies stay private unless you give permission to
            publish them. See our <Link to="/privacy">Privacy Policy</Link>.
          </p>
        </div>
        <div>
          <h2>Gifts</h2>
          <p>
            Gifts are voluntary and given to support the ministry's outreach, prayer and
            teaching work. If you have a question about a gift, please contact us.
          </p>
        </div>
        <div>
          <h2>Links and availability</h2>
          <p>
            We link to outside sites (such as WhatsApp and Zoom) that we do not control. The site is
            provided as-is; we do our best to keep it accurate and available but cannot guarantee it
            will always be error-free or uninterrupted.
          </p>
        </div>
        <div>
          <h2>Changes and contact</h2>
          <p>
            We may update these terms and will change the date above when we do. Questions? Email{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
        </div>
      </LegalPage>
    </SiteShell>
  );
}
