import { Camera } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { EvidenceItem } from "@/lib/content/outreach";

export function EvidenceCard({ evidence }: { evidence: EvidenceItem[] }) {
  return (
    <Card className="h-full rounded-2xl bg-card py-0 shadow-[var(--shadow-border)]">
      <CardHeader className="px-6 pt-6">
        <CardTitle className="flex items-center gap-2 font-serif text-xl text-primary">
          <Camera className="size-5" />
          Evidence Log
        </CardTitle>
      </CardHeader>
      <CardContent className="px-6 pb-6 text-foreground/85">
        {evidence.length === 0 ? (
          <p className="text-muted-foreground">No evidence added yet.</p>
        ) : (
          <div className="space-y-4">
            {evidence.map((item, idx) => (
              <div key={idx} className="rounded-xl bg-secondary p-3">
                <h4 className="font-semibold">{item.title}</h4>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    View Media
                  </a>
                )}
                <p className="mt-1 text-sm text-muted-foreground">{item.notes}</p>
              </div>
            ))}
          </div>
        )}
        <p className="mt-4 text-sm text-muted-foreground">
          Add testimonies, links, and media in the Admin panel.
        </p>
      </CardContent>
    </Card>
  );
}
