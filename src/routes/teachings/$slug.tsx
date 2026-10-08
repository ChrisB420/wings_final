import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/site-shell";
import { CreationScroll } from "@/components/teachings/creation-scroll";
import { DivineLight } from "@/components/teachings/divine-light";
import { FaithScroll } from "@/components/teachings/faith-scroll";
import { MenorahMysteries } from "@/components/teachings/menorah-mysteries";
import { NuclearProphecy } from "@/components/teachings/nuclear-prophecy";
import { ScrollNavigation } from "@/components/teachings/scroll-navigation";
import { SpiritualWarfare } from "@/components/teachings/spiritual-warfare";
import { teachings } from "@/lib/content/teachings";
import { siteConfig } from "@/lib/site";

const meta: Record<string, { title: string; description: string }> = {
  creation: {
    title: "Creation Scroll",
    description:
      "The First Command — Let there be light. Explore the revelation of creation, vibration, sound, and divine manifestation.",
  },
  "divine-light": {
    title: "The Divine Light",
    description:
      "A revelation of light, time, and creation — where each day is a structured expression of divine motion.",
  },
  "menorah-mysteries": {
    title: "The Menorah Mysteries",
    description:
      "The Menorah as divine revelation — light, structure, and the manifestation of God’s order in creation, redemption, and spiritual reality.",
  },
  "faith-scroll": {
    title: "Faith Scroll",
    description:
      "The Seven Lamps, the Living Word, and the Curse of Death — teachings on prophecy, nations, spiritual revelation, and biblical alignment.",
  },
  nuclear: {
    title: "Nuclear — A Prophetic Study",
    description:
      "A prophetic study connecting ancient biblical judgments, desolation passages, and end-times interpretation discussions.",
  },
  "spiritual-warfare": {
    title: "Spiritual Warfare",
    description:
      "The armor of God, discernment above deception, and standing firm as the last-days battle intensifies.",
  },
};

export const Route = createFileRoute("/teachings/$slug")({
  loader: ({ params }) => {
    const teaching = teachings.find((t) => t.slug === params.slug && t.status === "published");
    if (!teaching) throw notFound();
    return { teaching };
  },
  head: ({ loaderData }) => {
    const slug = loaderData?.teaching.slug ?? "";
    const info = meta[slug];
    return {
      meta: [
        { title: `${info?.title ?? "Teaching"} | ${siteConfig.name}` },
        { name: "description", content: info?.description ?? siteConfig.description },
      ],
    };
  },
  component: TeachingPage,
});

function TeachingPage() {
  const { teaching } = Route.useLoaderData();
  const slug = teaching.slug;
  const info = meta[slug];

  if (slug === "creation") {
    return (
      <SiteShell>
        <CreationScroll />
        <div className="mx-auto max-w-5xl px-6 pb-20">
          <ScrollNavigation slug="creation" />
        </div>
      </SiteShell>
    );
  }

  if (slug === "faith-scroll") {
    return (
      <SiteShell>
        <FaithScroll />
        <div className="px-4 pb-16">
          <div className="mx-auto max-w-4xl">
            <ScrollNavigation slug="faith-scroll" />
          </div>
        </div>
      </SiteShell>
    );
  }

  if (slug === "nuclear") {
    return (
      <SiteShell>
        <NuclearProphecy />
      </SiteShell>
    );
  }

  return (
    <SiteShell>
      <section className="px-4 pt-16 pb-12 text-center md:px-6">
        <h1 className="font-serif text-4xl font-semibold md:text-6xl">{info?.title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{info?.description}</p>
      </section>
      <section className="px-4 pb-24 md:px-6">
        <div className="mx-auto max-w-4xl">
          {slug === "divine-light" && <DivineLight />}
          {slug === "menorah-mysteries" && <MenorahMysteries />}
          {slug === "spiritual-warfare" && <SpiritualWarfare />}
          <ScrollNavigation slug={slug} />
        </div>
      </section>
    </SiteShell>
  );
}
