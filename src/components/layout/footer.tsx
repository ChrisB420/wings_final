import { Link } from "@tanstack/react-router";
import { MenorahLogo } from "@/components/brand/menorah-logo";
import { footerLinks, legalLinks, siteConfig } from "@/lib/site";

function LinkColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-4 font-serif text-sm tracking-[0.18em] text-primary uppercase">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              to={link.href}
              className="text-sm text-foreground/70 transition-colors duration-150 hover:text-primary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="mb-6 flex items-center gap-3">
              <MenorahLogo className="h-11 w-auto text-primary" />
              <span className="font-serif text-base font-semibold tracking-wide text-primary">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mb-5 max-w-md leading-relaxed text-foreground/70">
              A digital platform teaching deep spiritual truths through a
              scroll-based system, combining biblical insight, visual
              storytelling, and real-world mission work.
            </p>
            <p className="text-sm text-muted-foreground">{siteConfig.tagline}</p>
          </div>
          <LinkColumn title="Explore" links={footerLinks.explore} />
          <LinkColumn title="Resources" links={footerLinks.resources} />
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={siteConfig.url}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {siteConfig.domain}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
