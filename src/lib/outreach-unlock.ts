import { createServerFn } from "@tanstack/react-start";

export const unlockOutreach = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    if (!data || typeof data !== "object") throw new Error("Invalid request");
    const key = (data as { key?: unknown }).key;
    if (typeof key !== "string") throw new Error("Invalid request");
    return { key };
  })
  .handler(async ({ data }): Promise<{ ok: true } | { ok: false; reason: "unconfigured" | "invalid" }> => {
    const { createHash, timingSafeEqual } = await import("node:crypto");
    const digest = (value: string) => createHash("sha256").update(value).digest();
    const expected = process.env.OUTREACH_ADMIN_KEY;
    if (!expected) return { ok: false, reason: "unconfigured" };
    const valid = timingSafeEqual(digest(data.key), digest(expected));
    return valid ? { ok: true } : { ok: false, reason: "invalid" };
  });
