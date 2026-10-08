import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "@/components/home/about-section";
import { MissionSection } from "@/components/home/mission-section";
import { PageHero } from "@/components/layout/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { siteConfig } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About | ${siteConfig.name}` },
      {
        name: "description",
        content:
          "Learn about Wings of the Cherubim ministry, our mission, and the vision behind unveiling sacred prophetic revelations.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        kicker="Ministry"
        title="About Us"
        description="Discover the vision and heart behind Wings of the Cherubim."
      />
      <section className="px-4 py-20 md:px-6">
        <div className="mx-auto max-w-4xl rounded-2xl bg-card p-8 shadow-[var(--shadow-border)] md:p-12">
          <h2 className="mb-6 font-serif text-2xl text-primary md:text-3xl">Our Story</h2>
          <p className="mb-6 leading-relaxed text-muted-foreground">
            Wings of the Cherubim was born from a deep desire to unveil the sacred mysteries hidden
            within Scripture. Through prayerful study and divine revelation, we seek to illuminate
            the profound connections between biblical prophecy and God's eternal plan for
            humanity.
          </p>
          <p className="mb-6 leading-relaxed text-muted-foreground">
            Our ministry focuses on the symbolism of the Cherubim — those heavenly beings whose
            wings overshadow the mercy seat, representing the meeting place between God and man.
            Through the Scroll System, we guide seekers through layers of revelation: from the
            Scroll of Light to the Scroll of Promise.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Founded by {siteConfig.founder}, this ministry draws from decades of biblical study and
            a heart transformed by the living Word of God. We believe that in these last days, God
            is unveiling mysteries that have been sealed since ancient times.
          </p>
        </div>
      </section>
      <AboutSection />
      <MissionSection />
    </SiteShell>
  );
}
