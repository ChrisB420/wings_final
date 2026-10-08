import { useCallback, useRef, useState } from "react";
import { formspreeUrl } from "@/lib/site";

export type SubmitStatus = "idle" | "submitting" | "success" | "error";

export function useFormSubmit(formId: string) {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState(
    "We couldn't send your message. Please try again.",
  );
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
      setErrorMessage("We couldn't send your message. Please try again.");
      try {
        const replyTo = data.email?.trim();
        const res = await fetch(formspreeUrl(formId), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...data,
            ...(replyTo ? { _replyto: replyTo } : {}),
          }),
        });
        if (res.ok) {
          setStatus("success");
          return true;
        }

        let message = `Form service returned HTTP ${res.status}.`;
        const responseText = await res.text();
        if (responseText) {
          try {
            const responseBody: unknown = JSON.parse(responseText);
            if (
              responseBody &&
              typeof responseBody === "object" &&
              "errors" in responseBody &&
              Array.isArray(responseBody.errors)
            ) {
              const firstError = responseBody.errors.find(
                (item: unknown): item is { message: string } =>
                  !!item &&
                  typeof item === "object" &&
                  "message" in item &&
                  typeof item.message === "string",
              );
              if (firstError) message = firstError.message;
            }
          } catch {
            message = `Form service returned HTTP ${res.status}.`;
          }
        }
        setErrorMessage(`Your message was not accepted: ${message}`);
        setStatus("error");
        return res.ok;
      } catch (error) {
        setErrorMessage(
          error instanceof Error
            ? `We couldn't reach the form service: ${error.message}`
            : "We couldn't reach the form service. Please try again.",
        );
        setStatus("error");
        return false;
      }
    },
    [formId],
  );

  const reset = useCallback(() => setStatus("idle"), []);

  return { status, submit, reset, honeypotProps, errorMessage };
}
