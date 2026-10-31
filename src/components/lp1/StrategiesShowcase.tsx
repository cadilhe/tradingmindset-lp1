import { useState } from "react";
import { Check, Crosshair, Lock, ShieldCheck } from "lucide-react";

import exampleImage from "@/assets/estrategia-bandeira-exemplo.png";
import {
  SAMPLE_STRATEGY,
  STRATEGIES_TOTAL,
  STRATEGY_CATEGORIES,
  STRATEGY_DISCLAIMER,
} from "@/lib/strategies";
import { cn } from "@/lib/utils";

function ChecklistDemo() {
  const [done, setDone] = useState<boolean[]>(() => SAMPLE_STRATEGY.checklist.map(() => false));
  const total = done.length;
  const count = done.filter(Boolean).length;
  const complete = count === total;

  return (
    <div className="panel p-5 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="label text-urgency">{SAMPLE_STRATEGY.category} • LIBERADA NO PLANO GRÁTIS</span>
          <h3 className="mt-2 text-lg font-bold leading-tight">{SAMPLE_STRATEGY.name}</h3>
          <p className="mt-1 text-xs text-muted-foreground">{SAMPLE_STRATEGY.summary}</p>
        </div>
        <span className="feature-icon shrink-0">
          <Crosshair className="size-5" />
        </span>
      </div>

      <img
        src={exampleImage}
        alt="Diagrama técnico de exemplo da estratégia Bandeira Bull ou Bear"
        loading="lazy"
        className="mt-4 w-full rounded-md border border-border object-contain"
      />

      <span className="label mt-5 block text-muted-foreground">
        CHECKLIST PRÉ-TRADE — TOQUE PARA VALIDAR
      </span>
      <ul className="mt-3 space-y-2">
        {SAMPLE_STRATEGY.checklist.map((item, i) => (
          <li key={item}>
            <button
              type="button"
              aria-pressed={done[i]}
              onClick={() => setDone((prev) => prev.map((v, idx) => (idx === i ? !v : v)))}
              className={cn(
                "flex w-full items-start gap-3 rounded-md border px-3 py-2.5 text-left text-sm transition-colors",
                done[i]
                  ? "border-profit/40 bg-profit/10 text-profit"
                  : "border-border text-muted-foreground hover:text-foreground",
              )}
            >
              <span
                className={cn(
                  "mt-0.5 grid size-5 shrink-0 place-items-center rounded border",
                  done[i] ? "border-profit bg-profit text-background" : "border-border",
                )}
              >
                {done[i] ? <Check className="size-3.5" /> : null}
              </span>
              {item}
            </button>
          </li>
        ))}
      </ul>

      <div
        className={cn(
          "mt-4 flex items-center gap-2 rounded-md border px-3 py-2.5 text-xs font-bold",
          complete
            ? "border-profit/40 bg-profit/10 text-profit"
            : "border-primary/30 bg-primary/5 text-primary",
        )}
      >
        <ShieldCheck className="size-4 shrink-0" />
        {complete
          ? "SETUP VALIDADO PARA EXECUÇÃO (100%)"
          : `Progresso de validação: ${count} de ${total}`}
      </div>
    </div>
  );
}

export function StrategiesShowcase() {
  const [active, setActive] = useState(STRATEGY_CATEGORIES[0]!.id);
  const category = STRATEGY_CATEGORIES.find((c) => c.id === active)!;

  return (
    <section id="estrategias" className="border-y border-border bg-surface/40 py-20 sm:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <span className="eyebrow">Novo • Biblioteca de Estratégias Operacionais</span>
          <h2 className="section-title mt-4">
            {STRATEGIES_TOTAL} estratégias com checklist para validar antes de clicar.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Disciplina também é saber exatamente quando o setup está completo. Cada playbook traz
            regras objetivas de entrada, stop e alvo, gestão de posição e estudos de caso reais.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Categorias">
              {STRATEGY_CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={active === c.id}
                  onClick={() => setActive(c.id)}
                  className={cn(
                    "rounded-md border px-3.5 py-1.5 text-xs font-bold transition-colors",
                    active === c.id
                      ? "border-primary/50 bg-primary/15 text-primary"
                      : "border-border text-muted-foreground hover:text-foreground",
                  )}
                >
                  {c.label} ({c.items.length})
                </button>
              ))}
            </div>

            <div className="panel mt-5 p-5 sm:p-6">
              <p className="text-sm text-muted-foreground">{category.tagline}</p>
              <ul className="mt-4 space-y-2.5">
                {category.items.map((s) => (
                  <li
                    key={s.name}
                    className="flex items-center justify-between gap-3 rounded-md border border-border px-4 py-3 text-sm"
                  >
                    <span className="font-semibold">{s.name}</span>
                    {s.free ? (
                      <span className="shrink-0 rounded border border-profit/40 bg-profit/10 px-2 py-0.5 text-[10px] font-extrabold text-profit">
                        FREE
                      </span>
                    ) : (
                      <span className="inline-flex shrink-0 items-center gap-1 rounded border border-urgency/40 bg-urgency/10 px-2 py-0.5 text-[10px] font-extrabold text-urgency">
                        <Lock className="size-3" /> PRO
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <ul className="mt-6 grid gap-2.5 text-sm sm:grid-cols-2">
              {[
                "Mais de 80 diagramas técnicos com zoom",
                "Entry, Stop e Target objetivos",
                "Gestão de posição passo a passo",
                "Casos reais: o trade válido e o filtrado",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-profit" />
                  {b}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[11px] leading-relaxed text-muted-foreground">
              {STRATEGY_DISCLAIMER}
            </p>
          </div>

          <ChecklistDemo />
        </div>
      </div>
    </section>
  );
}

