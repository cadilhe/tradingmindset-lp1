import { motion } from "framer-motion";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BellRing,
  Check,
  ChevronDown,
  CircleCheck,
  Headphones,
  Laptop,
  Menu,
  Pause,
  Play,
  Shield,
  ShieldCheck,
  Sparkles,
  Target,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

import heroImage from "@/assets/trading-workstation.jpg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CHECKOUT_URL } from "@/lib/offer";

const navigation = [
  ["Módulos", "pilares"],
  ["Tarot Trader", "tarot"],
  ["Audioteca", "audio"],
  ["Comparativo", "comparativo"],
  ["Planos", "planos"],
  ["FAQ", "faq"],
] as const;

const pillars = [
  {
    icon: Sparkles,
    title: "Tarot Trader",
    eyebrow: "DIAGNÓSTICO DE VIÉS",
    text: "22 arquétipos comportamentais revelam o padrão mental que pode sabotar seu pregão.",
  },
  {
    icon: Headphones,
    title: "Audioteca Neural",
    eyebrow: "FOCO SOB DEMANDA",
    text: "Ondas Alfa 10 Hz, Teta 6 Hz e ancoragens para pré-market, pós-loss e flow state.",
  },
  {
    icon: Target,
    title: "Score de Disciplina",
    eyebrow: "PROCESSO MENSURÁVEL",
    text: "Checklist diário, Sniper Entry Check e evolução objetiva de 0 a 100%.",
  },
  {
    icon: AlertTriangle,
    title: "S.O.S Anti-Tilt",
    eyebrow: "INTERVENÇÃO IMEDIATA",
    text: "Respiração guiada 4-7-8 e resfriamento obrigatório quando o emocional assume o controle.",
  },
  {
    icon: BellRing,
    title: "Radar de Notícias",
    eyebrow: "RISCO SOB CONTROLE",
    text: "Alertas 15 minutos antes de Payroll, CPI, FOMC e Copom.",
  },
  {
    icon: Laptop,
    title: "Web + Mobile",
    eyebrow: "SEMPRE AO SEU LADO",
    text: "No celular ou navegador, ao lado do Profit e TradingView — até em modo avião.",
  },
];

const faqs = [
  [
    "Como recebo meu acesso após a compra?",
    "A liberação é imediata. Você recebe o acesso por e-mail e entra no app com o mesmo endereço usado na compra.",
  ],
  [
    "Funciona sem internet?",
    "Sim. Os áudios podem ser baixados para uso nativo em modo avião.",
  ],
  [
    "Funciona no celular e no computador?",
    "Sim. Você usa o aplicativo mobile e o Web Companion com seus dados sincronizados.",
  ],
  [
    "Serve para Ações, Cripto ou Forex?",
    "Sim. A disciplina e a psicologia de risco são universais, independentemente do mercado operado.",
  ],
  [
    "E se eu esquecer minha senha?",
    "A recuperação é instantânea e enviada com segurança para o seu e-mail.",
  ],
] as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Countdown() {
  const [seconds, setSeconds] = useState(14 * 60 + 32);
  useEffect(() => {
    const interval = window.setInterval(
      () => setSeconds((value) => (value > 0 ? value - 1 : 14 * 60 + 32)),
      1000
    );
    return () => window.clearInterval(interval);
  }, []);
  return (
    <span className="font-mono font-bold text-urgency">
      {String(Math.floor(seconds / 60)).padStart(2, "0")}:{String(seconds % 60).padStart(2, "0")}
    </span>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="announcement flex min-h-9 items-center justify-between px-4 text-center text-[11px] font-bold uppercase tracking-[0.12em] sm:text-xs">
        <div className="flex items-center gap-2">
          <Zap className="size-3.5 text-urgency" /> Acesso oficial liberado{" "}
          <span className="hidden sm:inline">• Versão 2026 com Tarot Trader e frequências binaurais •</span>{" "}
          <Countdown />
        </div>
        <div>
          <a
            href="/v2"
            className="inline-flex items-center rounded border border-primary/40 bg-primary/10 px-2 py-0.5 text-[11px] font-bold text-primary hover:bg-primary/20"
          >
            Ver Versão 2 (Cyberpunk) →
          </a>
        </div>
      </div>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <button
          onClick={() => scrollTo("inicio")}
          className="flex items-center gap-2.5"
          aria-label="Voltar ao início"
        >
          <span className="grid size-9 place-items-center rounded-md border border-primary/35 bg-primary/10 text-primary">
            <Shield className="size-5" />
          </span>
          <span className="text-sm font-extrabold tracking-[0.08em]">
            TRADING MINDSET <b className="text-urgency">PRO (V1)</b>
          </span>
        </button>
        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button size="default" className="hidden lg:inline-flex" onClick={() => scrollTo("planos")}>
            Garantir acesso <ArrowRight className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <nav className="grid gap-1 border-t border-border bg-background p-4 lg:hidden">
          {navigation.map(([label, id]) => (
            <button
              key={id}
              className="rounded-md px-4 py-3 text-left text-sm text-muted-foreground hover:bg-accent"
              onClick={() => {
                scrollTo(id);
                setOpen(false);
              }}
            >
              {label}
            </button>
          ))}
          <a
            href="/v2"
            className="rounded-md px-4 py-3 text-left text-sm text-primary hover:bg-accent"
          >
            → Ver Versão 2 (Cyberpunk)
          </a>
        </nav>
      )}
    </div>
  );
}

function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="app-frame relative mx-auto w-full max-w-xl"
    >
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex gap-1.5">
          <i />
          <i />
          <i />
        </div>
        <span className="text-[10px] font-semibold tracking-[.2em] text-muted-foreground">
          PRE-MARKET CONTROL
        </span>
        <Activity className="size-4 text-profit" />
      </div>
      <div className="grid gap-3 p-4 sm:grid-cols-[1.15fr_.85fr]">
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="metric">
              <span>DISCIPLINE SCORE</span>
              <strong className="text-profit">100%</strong>
              <small>Pronto para operar</small>
            </div>
            <div className="metric">
              <span>STREAK ATUAL</span>
              <strong>
                03 <small>dias</small>
              </strong>
              <small className="text-profit">↑ Seu melhor ritmo</small>
            </div>
          </div>
          <div className="panel p-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="label">CHECKLIST PRÉ-MARKET</span>
              <span className="text-xs text-profit">4/4</span>
            </div>
            {[
              "Risco definido",
              "Notícias verificadas",
              "Setup confirmado",
              "Estado emocional estável",
            ].map((x) => (
              <div key={x} className="mb-2.5 flex items-center gap-2 text-xs text-muted-foreground">
                <CircleCheck className="size-4 text-profit" />
                {x}
              </div>
            ))}
          </div>
          <div className="panel flex items-center gap-3 p-3">
            <span className="grid size-10 place-items-center rounded-md bg-primary/15 text-primary">
              <Pause className="size-4 fill-current" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex justify-between text-xs">
                <b>Flow State • 10 Hz</b>
                <span className="text-muted-foreground">04:28</span>
              </div>
              <div className="wave mt-2">
                {Array.from({ length: 25 }).map((_, i) => (
                  <i key={i} style={{ height: `${8 + ((i * 11) % 24)}px` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="tarot-mini flex min-h-56 flex-col justify-between p-4">
          <span className="label text-urgency">CARTA DO DIA</span>
          <div>
            <Sparkles className="mb-3 size-7 text-urgency" />
            <h3 className="font-display text-2xl">O Franco-Atirador</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Hoje, precisão vale mais do que frequência.
            </p>
          </div>
          <div className="border-t border-urgency/20 pt-3 text-[10px] uppercase tracking-widest text-urgency">
            Antídoto: espere o seu setup
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function TarotCard() {
  const [revealed, setRevealed] = useState(false);
  return (
    <div id="tarot" className="grid items-center gap-8 lg:grid-cols-2">
      <div className="mx-auto h-[360px] w-[240px] [perspective:1000px]">
        <motion.div
          animate={{ rotateY: revealed ? 180 : 0 }}
          transition={{ duration: 0.7 }}
          className="relative size-full [transform-style:preserve-3d]"
        >
          <div className="tarot-face absolute inset-0 grid place-items-center [backface-visibility:hidden]">
            <div className="text-center">
              <Sparkles className="mx-auto size-12 text-urgency" />
              <span className="mt-5 block text-xs tracking-[.35em] text-muted-foreground">
                TAROT TRADER
              </span>
            </div>
          </div>
          <div className="tarot-face absolute inset-0 flex flex-col justify-between p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <span className="label text-urgency">ARQUÉTIPO 07</span>
            <div>
              <Target className="mb-5 size-10 text-primary" />
              <h3 className="font-display text-3xl">O Vingador</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Seu ego quer recuperar. Seu plano quer preservar.
              </p>
            </div>
            <p className="border-t border-border pt-4 text-xs">
              <b className="text-profit">ANTÍDOTO:</b> afaste-se da tela por 19 minutos.
            </p>
          </div>
        </motion.div>
      </div>
      <div>
        <span className="eyebrow">Diagnóstico precoce de viés</span>
        <h2 className="section-title mt-4">Descubra quem está prestes a clicar no mouse.</h2>
        <p className="mt-5 text-muted-foreground">
          Antes da abertura, uma carta traduz seu estado emocional em um arquétipo claro — com
          sabedoria prática e um antídoto imediato.
        </p>
        <Button className="mt-7" onClick={() => setRevealed(!revealed)}>
          {revealed ? "Virar novamente" : "Puxar uma carta de exemplo"}
          <Sparkles className="size-4" />
        </Button>
      </div>
    </div>
  );
}

function AudioDemo() {
  const [playing, setPlaying] = useState(true);
  return (
    <div
      id="audio"
      className="audio-strip grid gap-8 p-6 md:p-10 lg:grid-cols-[1fr_1.2fr] lg:items-center"
    >
      <div>
        <span className="eyebrow">Audioteca de alta performance</span>
        <h2 className="section-title mt-4">Mude seu estado antes que ele mude seu resultado.</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Ancoragens pré-market, descompressão pós-loss e frequências binaurais nativas.
        </p>
      </div>
      <div className="panel flex items-center gap-4 p-5">
        <Button
          size="icon"
          onClick={() => setPlaying(!playing)}
          aria-label={playing ? "Pausar áudio" : "Reproduzir áudio"}
        >
          {playing ? <Pause className="size-4 fill-current" /> : <Play className="size-4 fill-current" />}
        </Button>
        <div className="min-w-0 flex-1">
          <div className="mb-3 flex justify-between text-xs">
            <div>
              <b>Alpha Flow State</b>
              <span className="ml-2 text-primary">10 Hz</span>
            </div>
            <span className="text-muted-foreground">04:28</span>
          </div>
          <div className={cn("wave large", playing && "is-playing")}>
            {Array.from({ length: 42 }).map((_, i) => (
              <i
                key={i}
                style={{ height: `${8 + ((i * 13) % 35)}px`, animationDelay: `${i * 0.04}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Faq({
  question,
  answer,
  defaultOpen,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen ?? false);
  return (
    <div>
      <button
        className="flex w-full items-center justify-between gap-5 py-6 text-left font-semibold"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {question}
        <ChevronDown
          className={cn("size-5 shrink-0 text-primary transition-transform", open && "rotate-180")}
        />
      </button>
      {open && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="pb-6 pr-10 text-sm leading-relaxed text-muted-foreground"
        >
          {answer}
        </motion.p>
      )}
    </div>
  );
}

export function LandingV1() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Header />
      <section id="inicio" className="hero relative min-h-[760px] border-b border-border">
        <img
          src={heroImage}
          width={1536}
          height={1024}
          alt="Estação profissional de trading com gráficos em monitores"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-20 lg:grid-cols-[1fr_.95fr] lg:px-8 lg:pt-28">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="eyebrow inline-flex items-center gap-2">
              <Shield className="size-4" /> Blindagem mental & disciplina operacional
            </div>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.04] sm:text-5xl lg:text-6xl">
              Você já domina o gráfico.{" "}
              <span className="text-primary">Agora domine o que acontece entre as suas duas orelhas.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              O copiloto de alta performance que elimina o <em>revenge trading</em>, blinda sua mente
              antes da abertura e impede que 20 minutos de descontrole destruam semanas de lucro.
            </p>
            <div className="mt-8">
              <a
                href={CHECKOUT_URL}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-primary px-7 text-base font-bold text-primary-foreground shadow-glow transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 active:scale-[0.98]"
              >
                Quero desbloquear meu acesso PRO <ArrowRight className="size-5" />
              </a>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Liberação imediata • Garantia de 7 dias • Web + Mobile
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 text-[11px] text-muted-foreground sm:grid-cols-4">
              {["+20 áudios neurais", "Tarot diário", "S.O.S Anti-Tilt", "Modo avião"].map((x) => (
                <span key={x} className="flex items-center gap-1.5">
                  <Check className="size-3.5 text-profit" />
                  {x}
                </span>
              ))}
            </div>
          </motion.div>
          <div className="flex items-end">
            <DashboardMockup />
          </div>
        </div>
      </section>

      <section className="section-shell py-20 sm:py-24">
        <div className="text-center">
          <span className="eyebrow text-danger">O ciclo que destrói a consistência</span>
          <h2 className="section-title mx-auto mt-4 max-w-3xl">
            Quantas vezes você já viveu esse filme de terror?
          </h2>
        </div>
        <div className="timeline mt-12 grid gap-4 md:grid-cols-4">
          {[
            ["08:30", "Análise perfeita", "Você acorda focado, traça suportes e planeja o dia."],
            ["09:30", "Meta batida", "Duas operações cirúrgicas. A consistência parece ter chegado."],
            ["10:15", "O stop normal", "O mercado corrige, pega seu stop planejado e fere o ego."],
            ["10:35", "O colapso", "Você dobra contratos e devolve semanas em 20 minutos."],
          ].map(([time, title, text], i) => (
            <div className={cn("timeline-card", i === 3 && "danger-card")} key={time}>
              <span className="font-mono text-xs text-primary">{time}</span>
              <h3 className="mt-4 font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
        <blockquote className="danger-callout mx-auto mt-8 max-w-4xl">
          “O mercado não quebra traders pela falta de indicadores. Quebra nos cinco minutos em que a
          mente entra em colapso emocional.”
        </blockquote>
      </section>

      <section id="pilares" className="border-y border-border bg-surface/40 py-20 sm:py-24">
        <div className="section-shell">
          <div className="max-w-3xl">
            <span className="eyebrow">Sistema operacional da sua mente</span>
            <h2 className="section-title mt-4">Seis pilares. Uma disciplina impossível de negociar.</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <motion.article whileHover={{ y: -5 }} key={p.title} className="feature-card">
                <div className="mb-8 flex items-start justify-between">
                  <span className="feature-icon">
                    <p.icon className="size-5" />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                </div>
                <span className="label text-primary">{p.eyebrow}</span>
                <h3 className="mt-3 text-xl font-bold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20 sm:py-24">
        <TarotCard />
      </section>

      <section className="section-shell pt-0 pb-20 sm:pb-24">
        <AudioDemo />
      </section>

      <section id="comparativo" className="border-y border-border bg-surface/40 py-20 sm:py-24">
        <div className="section-shell">
          <div className="text-center">
            <span className="eyebrow">A diferença está no processo</span>
            <h2 className="section-title mt-4">
              Mesmo mercado. Duas respostas completamente diferentes.
            </h2>
          </div>
          <div className="comparison mx-auto mt-12 max-w-5xl overflow-x-auto">
            <div className="min-w-[700px]">
              <div className="comparison-row comparison-head">
                <span>Momento</span>
                <span className="text-danger">Trader no improviso</span>
                <span className="text-profit">Trader Mindset PRO</span>
              </div>
              {[
                ["Após o stop loss", "Tenta recuperar imediatamente", "Ativa S.O.S e cumpre cooldown"],
                ["Rotina às 08:30", "Abre o gráfico sem preparo", "Executa checklist e lê o viés"],
                ["Notícias macro", "Descobre durante o movimento", "Recebe alerta 15 min antes"],
                ["Consistência", "Confia na memória", "Acompanha score e streak"],
                ["Modo avião", "Fica sem suporte", "Leva áudios e protocolos offline"],
              ].map((row) => (
                <div className="comparison-row" key={row[0]}>
                  <b>{row[0]}</b>
                  <span>
                    <X className="size-4 text-danger" />
                    {row[1]}
                  </span>
                  <span>
                    <Check className="size-4 text-profit" />
                    {row[2]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-20 sm:py-24">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="fit-card positive">
            <ShieldCheck className="size-8 text-profit" />
            <h3 className="mt-6 text-2xl font-bold">É para você que...</h3>
            <ul>
              {[
                "Respeita o mercado, mas quer dominar o emocional",
                "Busca processo, métricas e consistência real",
                "Aceita seguir protocolos mesmo sob pressão",
                "Quer preservar capital antes de buscar lucro",
              ].map((x) => (
                <li key={x}>
                  <Check />
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="fit-card negative">
            <X className="size-8 text-danger" />
            <h3 className="mt-6 text-2xl font-bold">Não é para quem...</h3>
            <ul>
              {[
                "Procura sala de sinais ou call de entrada",
                "Acredita em lucro rápido sem processo",
                "Quer uma fórmula mágica para nunca perder",
                "Recusa assumir responsabilidade pelas decisões",
              ].map((x) => (
                <li key={x}>
                  <X />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="planos" className="section-shell py-20 sm:py-24">
        <div className="pricing mx-auto max-w-3xl">
          <div className="pricing-badge">MAIS ESCOLHIDO</div>
          <div className="p-6 sm:p-10">
            <div className="text-center">
              <span className="eyebrow text-urgency">Acesso completo</span>
              <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
                PLANO TRADER PRO
              </h2>
              <p className="mt-5 text-sm text-muted-foreground">
                De <s>R$ 297,00</s> por apenas
              </p>
              <div className="mt-2">
                <span className="text-lg text-muted-foreground">12x de </span>
                <strong className="font-display text-5xl font-extrabold text-urgency sm:text-6xl">
                  R$ 14,76
                </strong>
              </div>
              <p className="mt-2 text-sm">ou R$ 147,00 à vista</p>
              <p className="mx-auto mt-5 max-w-lg rounded-md bg-urgency/10 px-4 py-3 text-xs text-urgency">
                Menos de R$ 0,40 por dia — menos que um único stop descontrolado.
              </p>
            </div>
            <div className="mx-auto my-8 h-px max-w-xl bg-border" />
            <ul className="mx-auto grid max-w-xl gap-4 text-sm">
              {[
                "Catálogo completo com +20 áudios e frequências",
                "Download offline no celular",
                "Tarot Trader com histórico completo de 90 dias",
                "Sincronização em nuvem: Mobile + Web",
                "Todas as novas cartas e atualizações futuras",
              ].map((x) => (
                <li key={x} className="flex items-center gap-3">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-profit/10 text-profit">
                    <Check className="size-3.5" />
                  </span>
                  {x}
                </li>
              ))}
            </ul>
            <a
              href={CHECKOUT_URL}
              className="mt-9 flex min-h-14 w-full items-center justify-center gap-2 rounded-md bg-urgency px-7 text-base font-bold text-urgency-foreground shadow-gold transition-all duration-200 hover:-translate-y-0.5 hover:bg-urgency/90 active:scale-[0.98]"
            >
              Quero garantir minha vaga com desconto <ArrowRight className="size-5" />
            </a>
            <p className="mt-4 text-center text-[11px] text-muted-foreground">
              Compra segura • Acesso imediato • 7 dias de garantia
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="guarantee mx-auto flex max-w-4xl flex-col items-center gap-6 p-7 text-center sm:flex-row sm:text-left">
          <span className="grid size-20 shrink-0 place-items-center rounded-full border border-urgency/30 bg-urgency/10">
            <ShieldCheck className="size-10 text-urgency" />
          </span>
          <div>
            <span className="label text-urgency">Garantia blindada de 7 dias</span>
            <h2 className="mt-2 text-xl font-bold">Teste com o risco completamente zerado.</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Se não transformar sua disciplina nas telas, devolvemos 100% do valor com um clique.
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="section-shell py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="eyebrow">Perguntas frequentes</span>
            <h2 className="section-title mt-4">Sem dúvida antes da decisão.</h2>
          </div>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {faqs.map(([q, a], i) => (
              <Faq key={q} question={q} answer={a} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-surface px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2">
              <Shield className="size-5 text-primary" />
              <b className="text-sm tracking-widest">
                TRADING MINDSET <span className="text-urgency">PRO</span>
              </b>
            </div>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <a href="#faq">Termos de Uso</a>
              <a href="#faq">Política de Privacidade</a>
            </div>
          </div>
          <p className="max-w-3xl text-[11px] leading-relaxed text-muted-foreground">
            O Trading Mindset é uma ferramenta de apoio educacional e comportamental. Não constitui
            recomendação de investimento. Resultados passados não garantem resultados futuros.
          </p>
          <div className="border-t border-border pt-6 text-xs text-muted-foreground">
            © 2026 Trading Mindset. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}
