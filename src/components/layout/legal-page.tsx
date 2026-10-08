import { PageHero } from "@/components/layout/page-hero";

export function LegalPage({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero title={title} description={intro} />
      <section className="px-4 py-16 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8 leading-relaxed text-foreground/85 [&_a]:text-primary [&_a:hover]:underline [&_h2]:mb-3 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-primary [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
          <p className="text-sm text-muted-foreground">Last updated: {updated}</p>
          {children}
        </div>
      </section>
    </>
  );
}
