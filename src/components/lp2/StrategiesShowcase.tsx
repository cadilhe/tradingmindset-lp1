import { useState } from "react";
import { Check, Crosshair, Lock, ShieldCheck } from "lucide-react";
import { Reveal, SectionTitle } from "./Reveal";
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
    <div className="glass-card rounded-2xl p-5 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-amber">
            {SAMPLE_STRATEGY.category} • Liberada no plano grátis
          </p>
          <h4 className="mt-1 text-base font-extrabold leading-tight">{SAMPLE_STRATEGY.name}</h4>
          <p className="mt-1 text-xs text-muted-foreground">{SAMPLE_STRATEGY.summary}</p>
        </div>
        <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-amber/30 bg-amber/10 text-amber">
          <Crosshair className="size-5" />
        </span>
      </div>

      <img
        src={exampleImage}
        alt="Diagrama técnico de exemplo da estratégia Bandeira Bull ou Bear"
        loading="lazy"
        className="mt-4 w-full rounded-xl border border-border bg-background-deep object-contain"
      />

      <p className="mt-5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
        Checklist pré-trade — toque para validar
      </p>
      <ul className="mt-3 space-y-2">
        {SAMPLE_STRATEGY.checklist.map((item, i) => (
          <li key={item}>
            <button
              type="button"
              aria-pressed={done[i]}
              onClick={() => setDone((prev) => prev.map((v, idx) => (idx === i ? !v : v)))}
              className={cn(
                "flex w-full items-start gap-3 rounded-xl border px-3 py-2.5 text-left text-sm transition-colors",
                done[i]
                  ? "border-emerald/40 bg-emerald/10 text-emerald"
                  : "border-border bg-background-deep/50 text-foreground/85 hover:border-cyan/30",
              )}
            >
              <span
                className={cn(
                  "mt-0.5 grid size-5 shrink-0 place-items-center rounded-md border",
                  done[i] ? "border-emerald bg-emerald text-background-deep" : "border-border",
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
          "mt-4 flex items-center gap-2 rounded-xl border px-3 py-2.5 text-xs font-bold",
          complete
            ? "border-emerald/40 bg-emerald/10 text-emerald"
            : "border-cyan/25 bg-cyan/5 text-cyan",
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
    <section id="estrategias" className="relative py-20 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Novo • Biblioteca de Estratégias"
            title={`${STRATEGIES_TOTAL} estratégias operacionais com checklist para validar antes de clicar`}
            subtitle="Disciplina também é saber exatamente quando o setup está completo. Cada playbook traz regras objetivas de entrada, stop e alvo, gestão de posição e estudos de caso reais."
          />
        </Reveal>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div>
              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Categorias">
                {STRATEGY_CATEGORIES.map((c) => (
                  <button
                    key={c.id}
                    role="tab"
                    aria-selected={active === c.id}
                    onClick={() => setActive(c.id)}
                    className={cn(
                      "rounded-full border px-3.5 py-1.5 text-xs font-bold transition-colors",
                      active === c.id
                        ? "border-cyan/50 bg-cyan/15 text-cyan"
                        : "border-border text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {c.label} ({c.items.length})
                  </button>
                ))}
              </div>

              <div className="glass-card mt-5 rounded-2xl p-5 sm:p-6">
                <p className="text-sm text-muted-foreground">{category.tagline}</p>
                <ul className="mt-4 space-y-2.5">
                  {category.items.map((s) => (
                    <li
                      key={s.name}
                      className="flex items-center justify-between gap-3 rounded-xl border border-border bg-background-deep/50 px-4 py-3 text-sm"
                    >
                      <span className="font-semibold">{s.name}</span>
                      {s.free ? (
                        <span className="shrink-0 rounded-md border border-emerald/40 bg-emerald/10 px-2 py-0.5 text-[0.65rem] font-extrabold text-emerald">
                          FREE
                        </span>
                      ) : (
                        <span className="inline-flex shrink-0 items-center gap-1 rounded-md border border-amber/40 bg-amber/10 px-2 py-0.5 text-[0.65rem] font-extrabold text-amber">
                          <Lock className="size-3" /> PRO
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <ul className="mt-6 grid gap-2.5 text-sm text-foreground/90 sm:grid-cols-2">
                {[
                  "Mais de 80 diagramas técnicos com zoom",
                  "Entry, Stop e Target objetivos",
                  "Gestão de posição passo a passo",
                  "Casos reais: o trade válido e o filtrado",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-md bg-emerald/15 text-emerald">
                      <Check className="size-3.5" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[0.7rem] leading-relaxed text-muted-foreground">
                {STRATEGY_DISCLAIMER}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ChecklistDemo />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

