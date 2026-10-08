import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { outreachLeadership } from "@/lib/content/outreach";

export function MissionOverview() {
  return (
    <Card className="rounded-2xl bg-card py-0 shadow-[var(--shadow-border)]">
      <CardHeader className="px-6 pt-6">
        <CardTitle className="font-serif text-2xl text-primary">Mission Overview</CardTitle>
      </CardHeader>
      <CardContent className="px-6 pb-6 text-foreground/85">
        <p className="mb-4">
          This hub tracks all outreach under TEOM. Our calling is to carry the Flame of Christ into
          Mombasa through prayer, service, testimony, and light-bearing action.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {outreachLeadership.map((person) => (
            <div key={person.role} className="rounded-xl bg-secondary p-4">
              <p className="font-medium text-primary">{person.role}</p>
              <p>{person.name}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
