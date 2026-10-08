import { createFileRoute } from "@tanstack/react-router";
import { TestimonyForm } from "@/components/forms/testimony-form";
import { PhotoGallery } from "@/components/gallery/photo-gallery";
import { TestimonyWall } from "@/components/gallery/testimony-wall";
import { PageHero } from "@/components/layout/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { siteConfig } from "@/lib/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: `Gallery & Testimonies | ${siteConfig.name}` },
      {
        name: "description",
        content:
          "Photos from outreach in London, Manhattan, Mombasa and the Haiti prophetic witness — and testimonies of what God is doing.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <SiteShell>
      <PageHero
        kicker="The Field"
        title="Outreach Gallery"
        description="Moments from the mission field — London, Manhattan and Mombasa."
      />
      <section className="px-4 py-16 md:px-6">
        <div className="mx-auto max-w-6xl">
          <PhotoGallery />
        </div>
      </section>
      <TestimonyWall />
      <section className="px-4 py-16 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-3 font-serif text-3xl text-primary">Share Your Testimony</h2>
          <p className="mb-8 text-muted-foreground">
            Has God touched your life through this ministry? We'd love to hear it.
          </p>
          <TestimonyForm />
        </div>
      </section>
    </SiteShell>
  );
}
