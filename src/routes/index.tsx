import { createFileRoute, Link } from "@tanstack/react-router";
import { Activity, ArrowRight, Eye, Layers, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { useState } from "react";
import { LandingV1 } from "@/components/lp1/LandingV1";
import { LandingV2 } from "@/components/lp2/LandingV2";

const TITLE = "Trading Mindset PRO — Hub de Landing Pages (V1 & V2)";
const DESCRIPTION =
  "Projeto unificado contendo as versões 1 e 2 da Landing Page Trading Mindset PRO para testes e campanhas.";

export const Route = createFileRoute("/")({
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
  component: IndexPage,
});

function IndexPage() {
  const [activeTab, setActiveTab] = useState<"hub" | "v1" | "v2">("hub");

  if (activeTab === "v1") {
    return (
      <div className="relative">
        <div className="sticky top-0 z-[60] flex items-center justify-between border-b border-border bg-background/95 px-4 py-2 backdrop-blur-lg">
          <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
            <span className="size-2 rounded-full bg-emerald" /> Visualizando:{" "}
            <span className="text-foreground">Versão 1 (Workstation)</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("hub")}
              className="rounded-md border border-border px-2.5 py-1 text-xs font-semibold text-muted-foreground hover:bg-card hover:text-foreground"
            >
              Voltar ao Hub
            </button>
            <button
              onClick={() => setActiveTab("v2")}
              className="rounded-md bg-cyan/15 px-2.5 py-1 text-xs font-bold text-cyan hover:bg-cyan/25"
            >
              Trocar para Versão 2 →
            </button>
            <Link
              to="/v1"
              className="rounded-md bg-primary px-3 py-1 text-xs font-bold text-primary-foreground"
            >
              Abrir URL direta (/v1)
            </Link>
          </div>
        </div>
        <LandingV1 />
      </div>
    );
  }

  if (activeTab === "v2") {
    return (
      <div className="relative">
        <div className="sticky top-0 z-[60] flex items-center justify-between border-b border-border bg-background-deep/95 px-4 py-2 backdrop-blur-lg">
          <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
            <span className="size-2 rounded-full bg-cyan" /> Visualizando:{" "}
            <span className="text-foreground">Versão 2 (Cyberpunk Glassmorphism)</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("hub")}
              className="rounded-md border border-border px-2.5 py-1 text-xs font-semibold text-muted-foreground hover:bg-card hover:text-foreground"
            >
              Voltar ao Hub
            </button>
            <button
              onClick={() => setActiveTab("v1")}
              className="rounded-md bg-primary/15 px-2.5 py-1 text-xs font-bold text-primary hover:bg-primary/25"
            >
              ← Trocar para Versão 1
            </button>
            <Link
              to="/v2"
              className="rounded-md bg-cyan px-3 py-1 text-xs font-bold text-primary-foreground"
            >
              Abrir URL direta (/v2)
            </Link>
          </div>
        </div>
        <LandingV2 />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-deep text-foreground">
      {/* Top Banner */}
      <div className="bg-urgency border-b border-border py-2 text-center text-xs font-semibold">
        <span>⚡ Projeto Unificado: Duas Landing Pages de Alta Conversão</span>
      </div>

      <header className="border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-xl border border-cyan/40 bg-cyan/10 text-cyan shadow-glow-cyan">
              <Layers className="size-5" />
            </span>
            <div>
              <span className="text-sm font-extrabold uppercase tracking-[0.1em]">
                Trading Mindset <b className="text-amber">PRO</b>
              </span>
              <span className="ml-2 rounded border border-border bg-card px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground">
                Unified LPs
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/v1"
              className="rounded-lg border border-border bg-card/60 px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              /v1
            </Link>
            <Link
              to="/v2"
              className="rounded-lg border border-border bg-card/60 px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-cyan/50 hover:text-foreground"
            >
              /v2
            </Link>
          </div>
        </div>
      </header>

      <main className="section-shell py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-cyan">
            <Sparkles className="size-3.5" /> Landing Pages Integradas
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Escolha ou teste uma das versões do{" "}
            <span className="text-gradient-accent">Trading Mindset PRO</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            As duas versões da Landing Page foram unificadas em uma única aplicação otimizada. Você pode
            acessar as rotas independentes <code className="text-cyan">/v1</code> e{" "}
            <code className="text-cyan">/v2</code> ou pré-visualizar abaixo.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Card Version 1 */}
          <div className="glass-card group relative flex flex-col justify-between overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:border-primary/50 hover:shadow-glow">
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-primary">
                  <ShieldCheck className="size-3.5" /> Versão 1
                </span>
                <span className="font-mono text-xs font-bold text-muted-foreground">Rota: /v1</span>
              </div>

              <h2 className="mt-5 text-2xl font-extrabold">Workstation Dark & Editorial</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Design editorial focado na experiência do trader em tela, com fotografia profissional de
                estação operacional, painel de disciplina em tempo real e visual sóbrio de alta
                autoridade.
              </p>

              <div className="mt-6 rounded-2xl border border-border bg-card/60 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">Destaques da V1:</p>
                <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-profit">✓</span> Imagem de fundo imersiva do workstation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-profit">✓</span> Mockup com Score de Disciplina 100% e streak
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-profit">✓</span> Tarot Trader interativo com efeito 3D flip
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-profit">✓</span> Audioteca neural com visualizador de ondas
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/v1"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-center text-sm font-bold text-primary-foreground shadow-glow transition-all hover:bg-primary/90"
              >
                Abrir Versão 1 <ArrowRight className="size-4" />
              </Link>
              <button
                onClick={() => setActiveTab("v1")}
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card/60 px-4 py-3.5 text-sm font-semibold text-foreground hover:bg-accent"
              >
                <Eye className="size-4" /> Pré-visualizar
              </button>
            </div>
          </div>

          {/* Card Version 2 */}
          <div className="glass-card group relative flex flex-col justify-between overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:border-cyan/50 hover:shadow-glow-cyan">
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan/40 bg-cyan/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-cyan">
                  <Zap className="size-3.5" /> Versão 2
                </span>
                <span className="font-mono text-xs font-bold text-muted-foreground">Rota: /v2</span>
              </div>

              <h2 className="mt-5 text-2xl font-extrabold">Cyberpunk Fintech & Glassmorphism</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Design futurista neon com glassmorphism, gradientes vibrantes em cyan/amber/violet,
                simulador de respiração 4-7-8 interativo e abas dinâmicas no app mockup.
              </p>

              <div className="mt-6 rounded-2xl border border-border bg-card/60 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-cyan">Destaques da V2:</p>
                <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-cyan">✓</span> App Mockup interativo com 3 abas dinâmicas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan">✓</span> Simulador animado de Respiração 4-7-8 (S.O.S Anti-Tilt)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan">✓</span> Card 3D Tarot Trader com gerador aleatório de arquétipos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan">✓</span> Botões pulsantes e gradientes de alto contraste
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/v2"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-cyan px-5 py-3.5 text-center text-sm font-bold text-primary-foreground shadow-glow-cyan transition-all hover:bg-cyan/90"
              >
                Abrir Versão 2 <ArrowRight className="size-4" />
              </Link>
              <button
                onClick={() => setActiveTab("v2")}
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card/60 px-4 py-3.5 text-sm font-semibold text-foreground hover:bg-accent"
              >
                <Eye className="size-4" /> Pré-visualizar
              </button>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="mt-16 rounded-3xl border border-border bg-card/40 p-8">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-amber/15 text-amber">
              <Activity className="size-5" />
            </span>
            <div>
              <h3 className="text-base font-bold">Como usar no tráfego pago ou testes A/B:</h3>
              <p className="text-xs text-muted-foreground">
                Direcione o tráfego de campanhas diretamente para a rota desejada
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-background-deep/60 p-4">
              <p className="text-xs font-bold text-primary">Campanha A (Workstation):</p>
              <code className="mt-1 block text-sm text-foreground">https://seu-dominio.com/v1</code>
            </div>
            <div className="rounded-xl border border-border bg-background-deep/60 p-4">
              <p className="text-xs font-bold text-cyan">Campanha B (Cyberpunk):</p>
              <code className="mt-1 block text-sm text-foreground">https://seu-dominio.com/v2</code>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}