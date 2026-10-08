import { BookOpen, Heart, Sparkles, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: BookOpen,
    title: "Biblical Teaching",
    description:
      "Deep, scripture-rooted teaching that helps believers understand truth with clarity and confidence.",
  },
  {
    icon: Sparkles,
    title: "Spiritual Formation",
    description:
      "An immersive experience designed to awaken perspective, prayer, and personal transformation.",
  },
  {
    icon: Users,
    title: "Community Discipleship",
    description:
      "A connected network of people growing together through teaching, prayer, and shared mission.",
  },
  {
    icon: Heart,
    title: "Kingdom Impact",
    description:
      "A vision that moves beyond information into action, outreach, and practical ministry.",
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
              Wings of the Cherubim is a modern spiritual ministry platform built to reveal biblical
              truth, strengthen discipleship, and inspire believers to live with greater clarity,
              conviction, and compassion.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Through scripture, prophetic insight, and practical teaching, the ministry creates a
              space where revelation becomes formation — helping people encounter God, understand
              His purposes, and participate in His mission across nations.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                ["12+", "Teaching Scrolls"],
                ["500+", "Believers Engaged"],
                ["24", "Nations Impacted"],
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
