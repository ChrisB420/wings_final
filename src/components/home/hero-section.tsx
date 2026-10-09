import { Link } from "@tanstack/react-router";
import { Compass, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MediaShowcase } from "./media-showcase";
import { ScrollViewer } from "./scroll-viewer";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden" aria-label="Hero">
      <div
        className="absolute inset-0 scale-105 bg-[url('/images/hero/wings-banner.jpg')] bg-cover bg-center"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#080d20]/55 via-background/72 to-[#080d20]/95"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_15%,rgba(150,116,255,0.28),transparent_46%),radial-gradient(ellipse_at_85%_35%,rgba(57,194,239,0.16),transparent_42%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 animate-drift bg-[url('/images/hero/stars.svg')] bg-[length:600px_600px] bg-repeat opacity-30"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-20 pt-28 md:px-6 md:pb-24 md:pt-36">
        <div className="mb-10 text-center">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-2 text-[10px] tracking-[0.22em] text-primary uppercase md:text-[11px]">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/40 px-3 py-2 backdrop-blur-sm">
              <MapPin className="size-3.5" aria-hidden="true" />
              USA & International Outreach
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/40 px-3 py-2 backdrop-blur-sm">
              <Sparkles className="size-3.5" aria-hidden="true" />
              Prophetic Teaching
            </span>
          </div>

          <h1 className="font-serif text-5xl leading-[1.02] font-semibold tracking-tight text-foreground drop-shadow-[0_8px_36px_rgba(0,0,0,0.48)] md:text-7xl lg:text-8xl">
            Wings of the
            <br />
            <span className="bg-gradient-to-r from-[#d8d0ff] via-[#b5a1ff] to-[#6ce8f2] bg-clip-text text-transparent">
              Cherubim
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-foreground/78 md:text-xl">
            Revealing truth, building community, and carrying the gospel across the nations with
            biblical clarity, spiritual depth, and mission-driven action.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-3 text-sm text-foreground/70">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/35 px-3 py-2 backdrop-blur-sm">
            <Compass className="size-4 text-primary" aria-hidden="true" />
            Teachings
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/35 px-3 py-2 backdrop-blur-sm">
            <MapPin className="size-4 text-primary" aria-hidden="true" />
            Outreach
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/35 px-3 py-2 backdrop-blur-sm">
            <Sparkles className="size-4 text-primary" aria-hidden="true" />
            Revelation
          </span>
        </div>

        <MediaShowcase />
        <ScrollViewer />

        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="min-h-12 rounded-full px-8 shadow-[0_12px_36px_rgba(133,107,255,0.32)]"
          >
            <Link to="/teachings">Enter the Vision</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="min-h-12 rounded-full border-primary/40 bg-background/20 px-8 text-foreground backdrop-blur-sm hover:bg-primary/10"
          >
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
