import { Link } from "@tanstack/react-router";
import { outreachMotto } from "@/lib/content/outreach";
import { AdminPanel } from "./admin-panel";
import { ChurchesCard } from "./churches-card";
import { EvidenceCard } from "./evidence-card";
import { FinanceCard } from "./finance-card";
import { MissionOverview } from "./mission-overview";
import { PrayerWarriorInvite } from "./prayer-warrior-invite";
import { ScheduleCard } from "./schedule-card";
import { useOutreachData } from "./use-outreach-data";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "schedule", label: "Schedule" },
  { id: "churches", label: "Churches" },
  { id: "finance", label: "Finance" },
  { id: "evidence", label: "Evidence" },
  { id: "admin", label: "Admin" },
];

export function OutreachHub() {
  const data = useOutreachData();

  return (
    <div>
      <header className="border-b border-border px-4 py-16 text-center md:px-6">
        <p className="mb-4 text-xs tracking-[0.22em] text-primary uppercase">
          The Evangelism Outreach Mombasa (TEOM)
        </p>
        <h1 className="font-serif text-4xl font-semibold md:text-5xl">Outreach Hub</h1>
        <p className="mx-auto mt-5 max-w-3xl text-foreground/75 italic">“{outreachMotto}”</p>
      </header>
      <nav
        aria-label="Outreach hub sections"
        className="sticky top-20 z-40 border-b border-border bg-background/90 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-4 px-4 py-3 md:gap-6">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="min-h-11 text-sm font-medium hover:text-primary">
              {s.label}
            </a>
          ))}
          <Link to="/" className="min-h-11 text-sm font-medium text-primary">
            Home
          </Link>
        </div>
      </nav>
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <section id="overview" className="mb-8 scroll-mt-36">
          <MissionOverview />
        </section>
        <section className="mb-8">
          <PrayerWarriorInvite />
        </section>
        <div className="mb-8 grid gap-6 lg:grid-cols-3">
          <section id="schedule" className="scroll-mt-36">
            <ScheduleCard schedule={data.schedule} tasks={data.tasks} />
          </section>
          <section id="churches" className="scroll-mt-36">
            <ChurchesCard churches={data.churches.items} />
          </section>
          <section id="evidence" className="scroll-mt-36">
            <EvidenceCard evidence={data.evidence.items} />
          </section>
        </div>
        <section id="finance" className="mb-8 scroll-mt-36">
          <FinanceCard allocation={data.allocation} />
        </section>
        <section id="admin" className="scroll-mt-36">
          <AdminPanel data={data} />
        </section>
        <footer className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground">
          Motto: <span className="italic text-primary">"{outreachMotto}"</span> | Scriptural
          Anchor: Psalm 91:4
        </footer>
      </div>
    </div>
  );
}
