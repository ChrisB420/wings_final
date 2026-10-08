import type { SubmitStatus } from "@/hooks/use-form-submit";

export function FormStatus({
  status,
  successMessage,
  errorMessage = "Something went wrong. Please try again.",
  className = "",
}: {
  status: SubmitStatus;
  successMessage: string;
  errorMessage?: string;
  className?: string;
}) {
  if (status === "success") {
    return (
      <p role="status" className={`text-sm text-emerald-400 ${className}`}>
        {successMessage}
      </p>
    );
  }
  if (status === "error") {
    return (
      <p role="alert" className={`text-sm text-destructive ${className}`}>
        {errorMessage}
      </p>
    );
  }
  return null;
}
