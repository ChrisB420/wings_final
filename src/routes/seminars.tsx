import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle, Clock, Video } from "lucide-react";
import { SeminarRegistrationForm } from "@/components/forms/seminar-registration-form";
import { SeminarSchedule } from "@/components/forms/seminar-schedule";
import { SiteShell } from "@/components/layout/site-shell";
import { seminarSessions, seminarTopics } from "@/lib/content/seminars";
import { siteConfig } from "@/lib/site";

export const Route = createFileRoute("/seminars")({
  head: () => ({
    meta: [
      { title: `Seminars & Registration | ${siteConfig.name}` },
      {
        name: "description",
        content:
          "Join the Wings of the Cherubim five-session online seminar. Explore deep biblical insights on the Menorah, Time & Eternity, Salvation, Shofar Prophecy, and the Haitian Flag's divine symbolism.",
      },
    ],
  }),
  component: SeminarsPage,
});

function SeminarsPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden border-b border-border px-4 pt-16 pb-14 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs tracking-[0.22em] text-primary uppercase">Five Sessions</p>
          <h1 className="font-serif text-4xl font-semibold md:text-6xl">Online Seminars</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground italic">
            Deepening Your Understanding of God's Word Through Divine Revelation
          </p>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center font-serif text-3xl md:text-4xl">
            Unlock Profound Spiritual Truths
          </h2>
          <p className="mb-4 leading-relaxed text-foreground/85">
            Embark on a transformative five-session online seminar led by Gregory Schadt, visionary
            of Wings of the Cherubim. Delve into Holy Spirit-led insights that connect ancient
            biblical prophecies with today's world, unveiling divine blueprints for your life
            and the nations.
          </p>
          <p className="mb-10 leading-relaxed text-foreground/85">
            Each session offers a unique perspective, designed to illuminate scripture and deepen
            your walk with the Lord.
          </p>

          <div className="mb-10 rounded-2xl bg-card p-6 shadow-[var(--shadow-border)] md:p-8">
            <h3 className="mb-6 font-serif text-2xl">Core Seminar Topics</h3>
            <ul className="space-y-4">
              {seminarTopics.map((topic) => (
                <li key={topic.title} className="flex items-start gap-3">
                  <CheckCircle className="mt-1 size-5 shrink-0 text-primary" />
                  <div>
                    <span className="font-semibold">{topic.title}:</span>{" "}
                    <span className="text-muted-foreground">{topic.description}</span>
                  </div>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 mb-4 font-serif text-2xl">Format & Schedule</h3>
            <div className="mb-4 flex flex-wrap gap-4 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Video className="size-5 text-primary" />
                Online via Zoom
              </span>
              <span className="flex items-center gap-2">
                <Clock className="size-5 text-primary" />
                ~1 hour per session
              </span>
            </div>
            <p className="text-muted-foreground">
              This seminar will be conducted online via <strong>Zoom</strong>. Specific dates and
              times will be announced to registered participants. Each session is approximately one
              hour in length, totaling five hours of teaching.
            </p>
          </div>

          <div className="mb-10 rounded-2xl bg-secondary p-6 text-center">
            <h3 className="font-serif text-xl">Free Access (Starter Cohort)</h3>
            <p className="mt-2 text-2xl font-semibold text-primary">
              This full five-session seminar is currently FREE
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              We are launching a foundational learning group to build community and spread the
              message before future expansion.
            </p>
          </div>

          <div id="schedule" className="mb-12 scroll-mt-28">
            <h3 className="mb-6 text-center font-serif text-2xl md:text-3xl">Upcoming Sessions</h3>
            <SeminarSchedule sessions={seminarSessions} />
          </div>

          <div
            id="register-now"
            className="rounded-2xl bg-card p-8 text-center shadow-[var(--shadow-border)] md:p-10"
          >
            <h3 className="font-serif text-2xl md:text-3xl">Register for Free Access</h3>
            <p className="mx-auto mt-4 mb-8 max-w-lg text-muted-foreground">
              Enter your email to receive Zoom access details and all five seminar sessions.
            </p>
            <SeminarRegistrationForm />
            <p className="mt-6 text-sm text-muted-foreground">
              You will receive full seminar instructions and Zoom links via email.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
