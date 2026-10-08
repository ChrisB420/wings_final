import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";

export function SiteShell({
  children,
  overlay = false,
}: {
  children: React.ReactNode;
  overlay?: boolean;
}) {
  return (
    <>
      <Navigation overlay={overlay} />
      <main className={overlay ? "min-h-screen bg-background" : "min-h-screen bg-background pt-20"}>
        {children}
      </main>
      <Footer />
    </>
  );
}
