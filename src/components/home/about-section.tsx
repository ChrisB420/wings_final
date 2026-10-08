import { BookOpen, Heart, Sparkles, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: BookOpen,
    title: "Teaching Environment",
    description:
      "A structured space for learning deep biblical truths through revelation and understanding.",
  },
  {
    icon: Sparkles,
    title: "Spiritual Experience",
    description:
      "Content designed to be experienced — combining visual storytelling with prophetic insight.",
  },
  {
    icon: Users,
    title: "Mission Platform",
    description:
      "Connecting to real-world seminars, outreach programs, and community building.",
  },
  {
    icon: Heart,
    title: "Movement Hub",
    description:
      "More than a website — a gathering place for those seeking truth and transformation.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-xs tracking-[0.22em] text-primary uppercase">About</p>
            <h2 className="font-serif text-4xl font-semibold md:text-5xl">
              More Than a Website — <span className="text-primary">A Movement</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Wings of the Cherubim is a spiritual teaching platform and digital mission hub built
              to reveal and teach deep biblical truths. It is designed to guide people into
              understanding spiritual truths about God, light, creation, prophecy, and redemption
              through Christ.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The teachings are influenced by biblical scripture and prophetic insights, creating
              an immersive experience that combines deep teaching with visual storytelling and
              symbolic imagery.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                ["12+", "Sacred Scrolls"],
                ["500+", "Community Members"],
                ["24", "Nations Reached"],
              ].map(([stat, label]) => (
                <div key={label}>
                  <div className="font-serif text-3xl font-semibold text-primary">{stat}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <Card key={feature.title} className="rounded-2xl bg-card shadow-[var(--shadow-border)]">
                <CardContent className="p-6">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="size-5 text-primary" />
                  </div>
                  <h3 className="mb-2 font-serif text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
