import { createFileRoute } from "@tanstack/react-router";
import { LandingV2 } from "@/components/lp2/LandingV2";

const TITLE = "Trading Mindset PRO (V2) — Blindagem mental e disciplina para traders";
const DESCRIPTION =
  "O copiloto de alta performance que elimina o revenge trading: Tarot Trader, ondas binaurais, S.O.S anti-tilt e Score de Disciplina diário.";

export const Route = createFileRoute("/v2")({
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
  component: LandingV2,
});
