import { Link } from "@tanstack/react-router";
import { Calendar, Mail, MapPin, MessageCircle, Phone, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";

const calendarUrl = "/seminars#schedule";
const zoomUrl: string = siteConfig.zoomUrl || "/seminars#register-now";

const activities = [
  {
    icon: Calendar,
    title: "Teaching Seminars",
    description:
      "Join live sessions, prayer gatherings, and practical discipleship moments designed to deepen understanding.",
    cta: "View Schedule",
    href: calendarUrl,
  },
  {
    icon: MessageCircle,
    title: "Community Circle",
    description:
      "Connect with believers and seekers in a faith-filled space for encouragement, prayer, and shared insight.",
    cta: "Join Group",
    href: siteConfig.whatsappUrl,
  },
  {
    icon: MapPin,
    title: "Mission Outreach",
    description:
      "Support practical ministry and outreach efforts that bring hope, care, and the gospel into local communities.",
    cta: "Get Involved",
    href: "/outreach",
  },
];

export function MissionSection() {
  return (
    <section id="mission" className="relative overflow-hidden bg-secondary/50 py-20 md:py-32">
      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-5 text-xs tracking-[0.22em] text-primary uppercase">Our Mission</p>
          <h2 className="font-serif text-3xl font-semibold leading-tight md:text-5xl">
            Extending Into <span className="text-primary">Real Life</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Wings of the Cherubim extends into real-world impact through seminars, outreach, and
            global spiritual community building.
          </p>
        </div>

        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {activities.map((activity) => (
            <Card key={activity.title} className="rounded-2xl bg-card shadow-[var(--shadow-border)]">
              <CardContent className="flex h-full flex-col p-8 text-center">
                <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-full bg-primary/10">
                  <activity.icon className="size-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold">{activity.title}</h3>
                <p className="mt-3 mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {activity.description}
                </p>
                <Button asChild variant="outline" className="min-h-11 w-full rounded-full">
                  {activity.href.startsWith("/") ? (
                    <Link to={activity.href}>{activity.cta}</Link>
                  ) : (
                    <a href={activity.href} target="_blank" rel="noopener noreferrer">
                      {activity.cta}
                    </a>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mx-auto mb-16 max-w-4xl rounded-2xl bg-card shadow-[var(--shadow-border)]">
          <CardContent className="p-8 text-center md:p-10">
            <blockquote className="font-serif text-xl leading-relaxed md:text-3xl">
              “A global teaching platform, a spiritual resource center, a structured journey for
              truth seekers.”
            </blockquote>
            <p className="mt-6 text-xs tracking-[0.22em] text-muted-foreground uppercase">
              Our Vision
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              href: siteConfig.whatsappUrl,
              icon: Phone,
              title: "WhatsApp",
              note: "Instant community access",
              external: true,
            },
            {
              href: `mailto:${siteConfig.email}`,
              icon: Mail,
              title: "Email",
              note: "Official contact",
              external: true,
            },
            {
              href: calendarUrl,
              icon: Calendar,
              title: "Calendar",
              note: "Book seminars",
              external: false,
            },
            {
              href: zoomUrl,
              icon: Video,
              title: "Zoom",
              note: "Live teachings",
              external: !zoomUrl.startsWith("/"),
            },
          ].map((item) =>
            item.href.startsWith("/") ? (
              <Link
                key={item.title}
                to={item.href}
                className="rounded-2xl bg-card p-5 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
              >
                <div className="flex items-center gap-2 font-medium text-primary">
                  <item.icon className="size-4" />
                  {item.title}
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{item.note}</p>
              </Link>
            ) : (
              <a
                key={item.title}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="rounded-2xl bg-card p-5 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
              >
                <div className="flex items-center gap-2 font-medium text-primary">
                  <item.icon className="size-4" />
                  {item.title}
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{item.note}</p>
              </a>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
