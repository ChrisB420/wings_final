import { useCallback, useRef, useState } from "react";
import { formspreeUrl } from "@/lib/site";

export type SubmitStatus = "idle" | "submitting" | "success" | "error";

export function useFormSubmit(formId: string) {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const honeypot = useRef("");
  const honeypotProps = {
    type: "text" as const,
    name: "_gotcha",
    tabIndex: -1,
    autoComplete: "off",
    "aria-hidden": true as const,
    style: { position: "absolute" as const, left: "-9999px", opacity: 0 },
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      honeypot.current = e.target.value;
    },
  };

  const submit = useCallback(
    async (data: Record<string, string>) => {
      if (honeypot.current) {
        setStatus("success");
        return true;
      }
      setStatus("submitting");
      try {
        const res = await fetch(formspreeUrl(formId), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        });
        setStatus(res.ok ? "success" : "error");
        return res.ok;
      } catch {
        setStatus("error");
        return false;
      }
    },
    [formId],
  );

  const reset = useCallback(() => setStatus("idle"), []);

  return { status, submit, reset, honeypotProps };
}
