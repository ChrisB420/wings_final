"use client"

import { useEffect, useState } from "react"
import {
  initialChurches,
  initialEvidence,
  initialSchedule,
  type ChurchItem,
  type EvidenceItem,
  type ScheduleItem,
  type TaskItem,
} from "@/lib/content/outreach"

const STORAGE_KEY = "teom-outreach-v1"

function useList<T>(initial: T[]) {
  const [items, setItems] = useState<T[]>(initial)
  return {
    items,
    add: (item: T) => setItems((prev) => [...prev, item]),
    remove: (index: number) =>
      setItems((prev) => prev.filter((_, i) => i !== index)),
    replace: setItems,
  }
}

export interface FinanceSplit {
  total: number
  apparel: number
  food: number
  logistics: number
}

const defaultFinance: FinanceSplit = {
  total: 0,
  apparel: 30,
  food: 40,
  logistics: 30,
}

export function formatAllocation({
  total,
  apparel,
  food,
  logistics,
}: FinanceSplit) {
  const share = (pct: number) => ((total * pct) / 100).toFixed(2)
  return `Shirts/Hats: $${share(apparel)} | Food/Meals: $${share(food)} | Logistics: $${share(logistics)}`
}

/**
 * All state for the outreach hub, saved automatically to this browser's
 * localStorage (so a refresh no longer wipes it). It is per-device: to move
 * data between phones/computers use Export Data and Import Data. Sharing one
 * live copy across a team needs a server database.
 */
export function useOutreachData() {
  const schedule = useList<ScheduleItem>(initialSchedule)
  const churches = useList<ChurchItem>(initialChurches)
  const evidence = useList<EvidenceItem>(initialEvidence)
  const tasks = useList<TaskItem>([])
  const [finance, setFinance] = useState<FinanceSplit>(defaultFinance)
  const [allocation, setAllocation] = useState("")
  const [hydrated, setHydrated] = useState(false)

  const snapshot = () => ({
    schedule: schedule.items,
    churches: churches.items,
    evidence: evidence.items,
    tasks: tasks.items,
    finance,
  })

  /** Apply parsed data, ignoring any section that isn't the right shape. */
  function apply(data: unknown) {
    if (!data || typeof data !== "object") return false
    const d = data as Record<string, unknown>
    let applied = false
    if (Array.isArray(d.schedule)) { schedule.replace(d.schedule as ScheduleItem[]); applied = true }
    if (Array.isArray(d.churches)) { churches.replace(d.churches as ChurchItem[]); applied = true }
    if (Array.isArray(d.evidence)) { evidence.replace(d.evidence as EvidenceItem[]); applied = true }
    if (Array.isArray(d.tasks)) { tasks.replace(d.tasks as TaskItem[]); applied = true }
    if (d.finance && typeof d.finance === "object") {
      setFinance({ ...defaultFinance, ...(d.finance as Partial<FinanceSplit>) })
      applied = true
    }
    return applied
  }

  // Load saved data once, after mount (avoids server/client mismatch).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) apply(JSON.parse(raw))
    } catch {
      /* corrupt or unavailable storage — fall back to defaults */
    }
    setHydrated(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Save on every change (only after the initial load, so defaults can't
  // overwrite what was stored).
  useEffect(() => {
    if (!hydrated) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot()))
    } catch {
      /* storage full or blocked — the app still works, just unsaved */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated, schedule.items, churches.items, evidence.items, tasks.items, finance])

  const calculateAllocation = () => setAllocation(formatAllocation(finance))

  const exportData = () => {
    const blob = new Blob([JSON.stringify(snapshot(), null, 2)], {
      type: "application/json",
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "teom-outreach-data.json"
    a.click()
    URL.revokeObjectURL(url)
  }

  /** Returns true if the file contained usable data. */
  const importData = async (file: File) => {
    try {
      return apply(JSON.parse(await file.text()))
    } catch {
      return false
    }
  }

  const resetData = () => {
    schedule.replace(initialSchedule)
    churches.replace(initialChurches)
    evidence.replace(initialEvidence)
    tasks.replace([])
    setFinance(defaultFinance)
    setAllocation("")
  }

  return {
    schedule,
    churches,
    evidence,
    tasks,
    finance,
    setFinance,
    allocation,
    calculateAllocation,
    exportData,
    importData,
    resetData,
  }
}

export type OutreachData = ReturnType<typeof useOutreachData>
