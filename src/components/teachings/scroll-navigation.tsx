import { Link } from "@tanstack/react-router";
import { ShareButtons } from "@/components/teachings/share-buttons";
import { getAdjacentTeachings, teachingHref, teachings } from "@/lib/content/teachings";

export function ScrollNavigation({ slug }: { slug: string }) {
  const { prev, next } = getAdjacentTeachings(slug);
  const current = teachings.find((t) => t.slug === slug);

  return (
    <>
      {current && (
        <ShareButtons
          title={`${current.title} — Wings of the Cherubim`}
          path={teachingHref(current)}
        />
      )}
      <nav
        aria-label="Scroll navigation"
        className="mt-16 flex items-center justify-between border-t border-border pt-6"
      >
        {prev ? (
          <Link to={teachingHref(prev)} className="group text-left">
            <p className="text-xs text-muted-foreground">Previous Scroll</p>
            <p className="text-primary group-hover:underline">← {prev.title}</p>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link to={teachingHref(next)} className="group text-right">
            <p className="text-xs text-muted-foreground">Next Scroll</p>
            <p className="text-primary group-hover:underline">{next.title} →</p>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </>
  );
}
