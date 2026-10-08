import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/site-shell";
import { OutreachHub } from "@/components/outreach/outreach-hub";
import { siteConfig } from "@/lib/site";

export const Route = createFileRoute("/outreach")({
  head: () => ({
    meta: [
      { title: `Outreach | ${siteConfig.name}` },
      {
        name: "description",
        content:
          "The Evangelism Outreach Mombasa (TEOM) — schedule, churches, prayer warriors, and mission evidence.",
      },
    ],
  }),
  component: OutreachPage,
});

function OutreachPage() {
  return (
    <SiteShell>
      <OutreachHub />
    </SiteShell>
  );
}
