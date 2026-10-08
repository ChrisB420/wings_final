import { useState } from "react";
import { Calendar, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { OutreachData } from "./use-outreach-data";

export function ScheduleCard({
  schedule,
  tasks,
}: Pick<OutreachData, "schedule" | "tasks">) {
  const [draft, setDraft] = useState({ date: "", task: "" });

  function addTask() {
    if (!draft.date || !draft.task) return;
    tasks.add(draft);
    setDraft({ date: "", task: "" });
  }

  return (
    <Card className="h-full rounded-2xl bg-card py-0 shadow-[var(--shadow-border)]">
      <CardHeader className="px-6 pt-6">
        <CardTitle className="flex items-center gap-2 font-serif text-xl text-primary">
          <Calendar className="size-5" />
          Upcoming Actions
        </CardTitle>
      </CardHeader>
      <CardContent className="px-6 pb-6 text-foreground/85">
        <ul className="mb-4 space-y-4">
          {schedule.items.map((item, idx) => (
            <li key={idx} className="border-b border-border pb-3">
              <strong>{item.day}</strong> — {item.time}
              <br />
              <span className="text-muted-foreground">{item.location}</span>
              <br />
              <span className="text-sm text-muted-foreground">{item.focus}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted-foreground">
          Saturday market (11:00–12:00) and Sunday after-service outreach are the default anchors.
        </p>
        <div className="mt-6 border-t border-border pt-4">
          <h4 className="mb-3 font-semibold">Outreach Tasks</h4>
          <div className="space-y-2">
            <Input
              type="date"
              value={draft.date}
              onChange={(e) => setDraft({ ...draft, date: e.target.value })}
              className="min-h-11 bg-secondary"
            />
            <Input
              placeholder="Enter task"
              value={draft.task}
              onChange={(e) => setDraft({ ...draft, task: e.target.value })}
              className="min-h-11 bg-secondary"
            />
            <Button onClick={addTask} className="min-h-11 w-full rounded-full">
              <Plus className="size-4" /> Add Task
            </Button>
          </div>
          <ul className="mt-4 space-y-2">
            {tasks.items.map((task, idx) => (
              <li key={idx} className="flex items-center justify-between rounded-lg bg-secondary p-2 text-sm">
                <span>
                  <strong>{task.date}</strong> — {task.task}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => tasks.remove(idx)}
                  aria-label="Remove task"
                  className="size-11 text-destructive"
                >
                  <Trash2 className="size-4" />
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
