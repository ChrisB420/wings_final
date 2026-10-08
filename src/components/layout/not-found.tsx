import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/layout/site-shell";

export function NotFoundPage() {
  return (
    <SiteShell>
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <p className="mb-3 text-xs tracking-[0.22em] text-primary uppercase">404</p>
        <h1 className="font-serif text-4xl font-semibold md:text-5xl">Page not found</h1>
        <p className="mt-4 max-w-md text-muted-foreground">
          This path does not lead to a scroll. Return home, or open the teachings.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild className="min-h-11 rounded-full px-6">
            <Link to="/">Home</Link>
          </Button>
          <Button asChild variant="outline" className="min-h-11 rounded-full px-6">
            <Link to="/teachings">Teachings</Link>
          </Button>
        </div>
      </section>
    </SiteShell>
  );
}
