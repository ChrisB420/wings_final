import { Church } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ChurchItem } from "@/lib/content/outreach";

export function ChurchesCard({ churches }: { churches: ChurchItem[] }) {
  return (
    <Card className="h-full rounded-2xl bg-card py-0 shadow-[var(--shadow-border)]">
      <CardHeader className="px-6 pt-6">
        <CardTitle className="flex items-center gap-2 font-serif text-xl text-primary">
          <Church className="size-5" />
          Participating Churches
        </CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto px-6 pb-6 text-foreground/85">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="py-2 text-left">Church</th>
              <th className="py-2 text-left">Pastor</th>
              <th className="py-2 text-left">Warriors</th>
            </tr>
          </thead>
          <tbody>
            {churches.length === 0 ? (
              <tr>
                <td colSpan={3} className="py-4 text-center text-muted-foreground">
                  No churches added yet
                </td>
              </tr>
            ) : (
              churches.map((church, idx) => (
                <tr key={idx} className="border-b border-border">
                  <td className="py-2">{church.name}</td>
                  <td className="py-2">{church.pastor}</td>
                  <td className="py-2">
                    {church.warriors.length} / 5
                    <div className="mt-1 flex flex-wrap gap-1">
                      {church.warriors.map((w) => (
                        <span key={w} className="rounded-full bg-secondary px-2 py-0.5 text-xs">
                          {w}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <p className="mt-4 text-sm text-muted-foreground">
          Add churches and prayer warriors in the Admin panel.
        </p>
      </CardContent>
    </Card>
  );
}
