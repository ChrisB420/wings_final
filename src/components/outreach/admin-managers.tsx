import { useState } from "react";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { weekdays } from "@/lib/content/outreach";
import type { OutreachData } from "./use-outreach-data";

const fieldClass = "min-h-11 w-full bg-secondary";

function ManagerShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-secondary p-4">
      <h3 className="mb-4 font-serif text-lg font-semibold">{title}</h3>
      {children}
    </div>
  );
}

function Field({
  label,
  small,
  children,
}: {
  label: string;
  small?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label className={small ? "mb-1 text-xs text-muted-foreground" : "mb-1 text-muted-foreground"}>
        {label}
      </Label>
      {children}
    </div>
  );
}

function RemovableList({
  entries,
  onRemove,
}: {
  entries: string[];
  onRemove: (index: number) => void;
}) {
  return (
    <ul className="mt-4 max-h-40 space-y-2 overflow-y-auto">
      {entries.map((entry, idx) => (
        <li key={idx} className="flex items-center justify-between rounded-lg bg-card p-2 text-sm">
          <span>{entry}</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onRemove(idx)}
            aria-label={`Remove ${entry}`}
            className="size-11 text-destructive"
          >
            <Trash2 className="size-4" />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export function ScheduleManager({ schedule }: Pick<OutreachData, "schedule">) {
  const blank = { day: "Saturday", time: "", location: "", focus: "" };
  const [draft, setDraft] = useState(blank);

  function add() {
    if (!draft.time || !draft.location) return;
    schedule.add(draft);
    setDraft(blank);
  }

  return (
    <ManagerShell title="Schedule Manager">
      <div className="mb-3 grid grid-cols-2 gap-3">
        <Field label="Day">
          <Select value={draft.day} onValueChange={(day) => setDraft({ ...draft, day })}>
            <SelectTrigger className={fieldClass}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {weekdays.map((day) => (
                <SelectItem key={day} value={day}>
                  {day}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field label="Time Range">
          <Input
            placeholder="e.g., 11:00–12:00"
            value={draft.time}
            onChange={(e) => setDraft({ ...draft, time: e.target.value })}
            className={fieldClass}
          />
        </Field>
      </div>
      <div className="space-y-3">
        <Field label="Location">
          <Input
            placeholder="e.g., Kengeleni Market"
            value={draft.location}
            onChange={(e) => setDraft({ ...draft, location: e.target.value })}
            className={fieldClass}
          />
        </Field>
        <Field label="Focus">
          <Input
            placeholder="e.g., public prayer, preaching"
            value={draft.focus}
            onChange={(e) => setDraft({ ...draft, focus: e.target.value })}
            className={fieldClass}
          />
        </Field>
        <Button onClick={add} className="min-h-11 w-full rounded-full">
          Add Action
        </Button>
      </div>
      <RemovableList
        entries={schedule.items.map((s) => `${s.day} - ${s.location}`)}
        onRemove={schedule.remove}
      />
    </ManagerShell>
  );
}

export function ChurchManager({ churches }: Pick<OutreachData, "churches">) {
  const blank = { name: "", pastor: "", warriors: "" };
  const [draft, setDraft] = useState(blank);

  function add() {
    if (!draft.name) return;
    const warriors = draft.warriors
      .split(",")
      .map((w) => w.trim())
      .filter(Boolean);
    churches.add({ name: draft.name, pastor: draft.pastor, warriors });
    setDraft(blank);
  }

  return (
    <ManagerShell title="Church and Prayer Warriors">
      <div className="space-y-3">
        <Field label="Church Name">
          <Input
            placeholder="e.g., Gospel Light Church"
            value={draft.name}
            onChange={(e) => setDraft({ ...draft, name: e.target.value })}
            className={fieldClass}
          />
        </Field>
        <Field label="Pastor Name">
          <Input
            placeholder="e.g., Pastor John"
            value={draft.pastor}
            onChange={(e) => setDraft({ ...draft, pastor: e.target.value })}
            className={fieldClass}
          />
        </Field>
        <Field label="Prayer Warriors (comma-separated)">
          <Input
            placeholder="e.g., Mary, Peter, Joy, Kevin, Ruth"
            value={draft.warriors}
            onChange={(e) => setDraft({ ...draft, warriors: e.target.value })}
            className={fieldClass}
          />
        </Field>
        <Button onClick={add} className="min-h-11 w-full rounded-full">
          Add Church
        </Button>
      </div>
      <RemovableList
        entries={churches.items.map((c) => `${c.name} - ${c.warriors.length} warriors`)}
        onRemove={churches.remove}
      />
    </ManagerShell>
  );
}

export function FinanceManager({
  finance,
  setFinance,
  calculateAllocation,
}: Pick<OutreachData, "finance" | "setFinance" | "calculateAllocation">) {
  const percentTotal = finance.apparel + finance.food + finance.logistics;
  const percentField = (key: "apparel" | "food" | "logistics", label: string) => (
    <Field label={label} small>
      <Input
        type="number"
        min="0"
        max="100"
        value={finance[key]}
        onChange={(e) => setFinance({ ...finance, [key]: parseInt(e.target.value) || 0 })}
        className={fieldClass}
      />
    </Field>
  );

  return (
    <ManagerShell title="Financial Allocation">
      <div className="space-y-3">
        <Field label="Total Funds Received">
          <Input
            type="number"
            min="0"
            step="0.01"
            placeholder="e.g., 200"
            value={finance.total || ""}
            onChange={(e) => setFinance({ ...finance, total: parseFloat(e.target.value) || 0 })}
            className={fieldClass}
          />
        </Field>
        <div className="grid grid-cols-3 gap-2">
          {percentField("apparel", "Shirts/Hats %")}
          {percentField("food", "Food/Meals %")}
          {percentField("logistics", "Logistics %")}
        </div>
        {percentTotal !== 100 && (
          <p className="text-xs text-primary">Percentages add up to {percentTotal}%, not 100%.</p>
        )}
        <Button onClick={calculateAllocation} className="min-h-11 w-full rounded-full">
          Calculate Allocation
        </Button>
      </div>
    </ManagerShell>
  );
}

export function EvidenceManager({ evidence }: Pick<OutreachData, "evidence">) {
  const blank = { title: "", link: "", notes: "" };
  const [draft, setDraft] = useState(blank);

  function add() {
    if (!draft.title) return;
    evidence.add(draft);
    setDraft(blank);
  }

  return (
    <ManagerShell title="Evidence and Testimonies">
      <div className="space-y-3">
        <Field label="Title">
          <Input
            placeholder="e.g., Prayer at Kengeleni"
            value={draft.title}
            onChange={(e) => setDraft({ ...draft, title: e.target.value })}
            className={fieldClass}
          />
        </Field>
        <Field label="Media Link">
          <Input
            placeholder="https://"
            value={draft.link}
            onChange={(e) => setDraft({ ...draft, link: e.target.value })}
            className={fieldClass}
          />
        </Field>
        <Field label="Notes or Testimony">
          <Textarea
            placeholder="What happened? Who was touched?"
            value={draft.notes}
            onChange={(e) => setDraft({ ...draft, notes: e.target.value })}
            className="bg-secondary"
            rows={3}
          />
        </Field>
        <Button onClick={add} className="min-h-11 w-full rounded-full">
          Add Evidence
        </Button>
      </div>
      <RemovableList entries={evidence.items.map((e) => e.title)} onRemove={evidence.remove} />
    </ManagerShell>
  );
}
