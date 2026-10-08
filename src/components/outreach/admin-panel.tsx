import { useRef, useState } from "react";
import { Lock, Unlock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { unlockOutreach } from "@/lib/outreach-unlock";
import {
  ChurchManager,
  EvidenceManager,
  FinanceManager,
  ScheduleManager,
} from "./admin-managers";
import type { OutreachData } from "./use-outreach-data";

export function AdminPanel({ data }: { data: OutreachData }) {
  const [unlocked, setUnlocked] = useState(false);
  const [key, setKey] = useState("");
  const [error, setError] = useState("");
  const [checking, setChecking] = useState(false);
  const [notice, setNotice] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  async function handleImport(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const ok = await data.importData(file);
    setNotice(ok ? "Data imported." : "That file couldn't be read as outreach data.");
    e.target.value = "";
  }

  function handleReset() {
    if (window.confirm("Reset everything to the starting data? This can't be undone.")) {
      data.resetData();
      setNotice("Reset to starting data.");
    }
  }

  async function unlock() {
    setChecking(true);
    setError("");
    try {
      const result = await unlockOutreach({ data: { key } });
      if (result.ok) setUnlocked(true);
      else if (result.reason === "unconfigured") {
        setError("Admin unlock isn't configured on this server yet.");
      } else {
        setError("Invalid key. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setChecking(false);
    }
  }

  return (
    <Card className="rounded-2xl bg-card py-0 shadow-[var(--shadow-border)]">
      <CardHeader className="px-6 pt-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <CardTitle className="flex items-center gap-2 font-serif text-xl text-primary">
            {unlocked ? <Unlock className="size-5" /> : <Lock className="size-5" />}
            Administrative Controls
          </CardTitle>
          <div className="flex flex-wrap items-center gap-2">
            {!unlocked ? (
              <form
                className="flex items-center gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  unlock();
                }}
              >
                <Input
                  type="password"
                  placeholder="Enter secret key to unlock"
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  className="min-h-11 w-48 bg-secondary"
                />
                <Button type="submit" disabled={checking || !key} className="min-h-11 rounded-full">
                  {checking ? "Checking…" : "Unlock"}
                </Button>
              </form>
            ) : (
              <>
                <Button variant="outline" onClick={data.exportData} className="min-h-11 rounded-full">
                  Export
                </Button>
                <Button
                  variant="outline"
                  onClick={() => fileRef.current?.click()}
                  className="min-h-11 rounded-full"
                >
                  Import
                </Button>
                <Button
                  variant="outline"
                  onClick={handleReset}
                  className="min-h-11 rounded-full text-destructive"
                >
                  Reset
                </Button>
                <input
                  ref={fileRef}
                  type="file"
                  accept="application/json,.json"
                  onChange={handleImport}
                  className="hidden"
                />
                <Button
                  onClick={() => {
                    setUnlocked(false);
                    setKey("");
                  }}
                  className="min-h-11 rounded-full"
                >
                  Lock
                </Button>
              </>
            )}
          </div>
        </div>
        {error && (
          <p role="alert" className="text-sm text-destructive">
            {error}
          </p>
        )}
        {notice && (
          <p role="status" className="text-sm text-primary">
            {notice}
          </p>
        )}
      </CardHeader>
      <CardContent className="px-6 pb-6">
        {!unlocked ? (
          <div className="rounded-xl border border-dashed border-border p-4">
            <p className="text-sm text-muted-foreground">
              Administrative controls are hidden until the correct secret key is entered. Changes
              are saved automatically on this device.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            <ScheduleManager schedule={data.schedule} />
            <ChurchManager churches={data.churches} />
            <FinanceManager
              finance={data.finance}
              setFinance={data.setFinance}
              calculateAllocation={data.calculateAllocation}
            />
            <EvidenceManager evidence={data.evidence} />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
