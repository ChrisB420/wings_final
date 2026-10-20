import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/site-shell";
import { CreationScroll } from "@/components/teachings/creation-scroll";
import { DivineLight } from "@/components/teachings/divine-light";
import { FaithScroll } from "@/components/teachings/faith-scroll";
import { MenorahMysteries } from "@/components/teachings/menorah-mysteries";
import { NuclearProphecy } from "@/components/teachings/nuclear-prophecy";
import { ScrollNavigation } from "@/components/teachings/scroll-navigation";
import { ScrollReader } from "@/components/teachings/scroll-reader";
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
        {
          title: `${info?.title ?? loaderData?.teaching.title ?? "Teaching"} | ${siteConfig.name}`,
        },
        {
          name: "description",
          content: info?.description ?? loaderData?.teaching.description ?? siteConfig.description,
        },
      ],
    };
  },
  component: TeachingPage,
});

function TeachingPage() {
  const { teaching } = Route.useLoaderData();
  const slug = teaching.slug;
  const info = meta[slug];

  return (
    <SiteShell>
      <ScrollReader
        kicker={teaching.level}
        title={info?.title ?? teaching.title}
        description={info?.description ?? teaching.description}
      >
        {slug === "creation" ? (
          <CreationScroll />
        ) : slug === "faith-scroll" ? (
          <FaithScroll showTitle={false} />
        ) : slug === "nuclear" ? (
          <NuclearProphecy />
        ) : slug === "divine-light" ? (
          <DivineLight />
        ) : slug === "menorah-mysteries" ? (
          <MenorahMysteries />
        ) : slug === "spiritual-warfare" ? (
          <SpiritualWarfare />
        ) : (
          <article className="leading-relaxed text-muted-foreground">
            <p className="text-xs tracking-[0.18em] text-primary uppercase">Teaching overview</p>
            <h2 className="mt-3 font-serif text-2xl font-semibold text-foreground">
              {teaching.title}: key theme
            </h2>
            <p className="mt-4">{teaching.description}</p>
          </article>
        )}
      </ScrollReader>
      {slug !== "nuclear" && (
        <section className="px-4 pb-16 md:px-6">
          <div className="mx-auto max-w-5xl">
            <ScrollNavigation slug={slug} />
          </div>
        </section>
      )}
    </SiteShell>
  );
}
