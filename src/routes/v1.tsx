import { createFileRoute } from "@tanstack/react-router";
import { LandingV1 } from "@/components/lp1/LandingV1";

const TITLE = "Trading Mindset PRO (V1) — Disciplina para Traders";
const DESCRIPTION =
  "Blindagem mental, controle de FOMO e consistência operacional para traders de alta performance.";

export const Route = createFileRoute("/v1")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingV1,
});
