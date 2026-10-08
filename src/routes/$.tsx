import { createFileRoute } from "@tanstack/react-router";
import { NotFoundPage } from "@/components/layout/not-found";

export const Route = createFileRoute("/$")({
  component: NotFoundPage,
});
