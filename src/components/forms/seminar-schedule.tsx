import { useEffect, useState } from "react";
import { CalendarPlus, Clock } from "lucide-react";
import { buildIcs, googleCalendarUrl, type CalendarEvent } from "@/lib/calendar";
import type { SeminarSession } from "@/lib/content/seminars";
import { siteConfig } from "@/lib/site";

function toEvent(session: SeminarSession): CalendarEvent {
  const start = new Date(session.start);
  return {
    title: `Wings of the Cherubim — ${session.title}`,
    start,
    end: new Date(start.getTime() + session.durationMinutes * 60_000),
    description: `Online seminar via Zoom. Details: ${siteConfig.url}/seminars`,
    location: siteConfig.zoomUrl || "Zoom (link sent by email after registration)",
  };
}

function downloadIcs(session: SeminarSession) {
  const blob = new Blob([buildIcs(toEvent(session))], {
    type: "text/calendar;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "seminar.ics";
  a.click();
  URL.revokeObjectURL(url);
}

export function SeminarSchedule({ sessions }: { sessions: SeminarSession[] }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (sessions.length === 0) {
    return (
      <p className="text-center text-muted-foreground">
        The dates for the next series will be announced soon. Register below and we'll email
        you as soon as they're set.
      </p>
    );
  }

  const fmt = new Intl.DateTimeFormat(undefined, { dateStyle: "full", timeStyle: "short" });

  return (
    <ul className="mx-auto max-w-2xl space-y-4">
      {sessions.map((session) => {
        const event = toEvent(session);
        return (
          <li
            key={session.start}
            className="flex flex-col gap-4 rounded-2xl bg-card p-5 shadow-[var(--shadow-border)] sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h3 className="font-serif text-lg">{session.title}</h3>
              <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="size-4 text-primary" />
                {mounted ? fmt.format(event.start) : "…"} · {session.durationMinutes} min
              </p>
            </div>
            <div className="flex gap-2">
              <a
                href={googleCalendarUrl(event)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-1 rounded-full px-4 text-sm text-primary shadow-[var(--shadow-border)]"
              >
                <CalendarPlus className="size-4" /> Google
              </a>
              <button
                type="button"
                onClick={() => downloadIcs(session)}
                className="inline-flex min-h-11 items-center gap-1 rounded-full px-4 text-sm text-primary shadow-[var(--shadow-border)]"
              >
                <CalendarPlus className="size-4" /> Apple / Outlook
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
