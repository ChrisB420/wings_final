import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "@/components/home/about-section";
import { ConnectSection } from "@/components/home/connect-section";
import { GlobalReachMap } from "@/components/home/global-reach-map";
import { HaitiProphecy } from "@/components/home/haiti-prophecy";
import { HeroSection } from "@/components/home/hero-section";
import { MissionSection } from "@/components/home/mission-section";
import { OutreachSection } from "@/components/home/outreach-section";
import { PropheticTimeline } from "@/components/home/prophetic-timeline";
import { ScrollSystem } from "@/components/home/scroll-system";
import { UpdatesGallery } from "@/components/home/updates-gallery";
import { FaithScroll } from "@/components/teachings/faith-scroll";
import { SiteShell } from "@/components/layout/site-shell";
import { siteConfig } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${siteConfig.name} | Spiritual Teaching Platform` },
      { name: "description", content: siteConfig.description },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteShell overlay>
      <HeroSection />
      <UpdatesGallery />
      <FaithScroll titleAs="h2" />
      <ScrollSystem />
      <PropheticTimeline />
      <HaitiProphecy />
      <AboutSection />
      <MissionSection />
      <OutreachSection />
      <GlobalReachMap />
      <ConnectSection />
    </SiteShell>
  );
}
