import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PrayerWarriorInvite } from "@/components/outreach/prayer-warrior-invite";
import { outreachMotto } from "@/lib/content/outreach";

export function OutreachSection() {
  return (
    <section id="outreach" className="border-y border-border bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <p className="mb-5 text-xs tracking-[0.22em] text-primary uppercase">
            The Evangelism Outreach Mombasa (TEOM)
          </p>
          <h2 className="font-serif text-3xl font-semibold md:text-5xl">
            Outreach in <span className="text-primary">Mombasa</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-foreground/75 italic">
            “{outreachMotto}”
          </p>
        </div>
        <PrayerWarriorInvite />
        <div className="mt-10 text-center">
          <Button asChild size="lg" className="min-h-12 rounded-full px-8">
            <Link to="/outreach">
              Open the Outreach Hub <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
