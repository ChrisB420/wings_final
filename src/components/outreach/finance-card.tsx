import { DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function FinanceCard({ allocation }: { allocation: string }) {
  return (
    <Card className="rounded-2xl bg-card py-0 shadow-[var(--shadow-border)]">
      <CardHeader className="px-6 pt-6">
        <CardTitle className="flex items-center gap-2 font-serif text-xl text-primary">
          <DollarSign className="size-5" />
          Financial Overview
        </CardTitle>
      </CardHeader>
      <CardContent className="px-6 pb-6 text-foreground/85">
        <p className="mb-4">
          Financial allocations are managed through the Admin panel. Default split: 30% Apparel,
          40% Food, 30% Logistics.
        </p>
        {allocation && (
          <div className="rounded-xl bg-primary/10 p-4 text-center">
            <p className="text-lg font-semibold text-primary">{allocation}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
