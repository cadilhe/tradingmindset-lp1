// Conteúdo do módulo "Biblioteca de Estratégias Operacionais" do app Trading Mindset (v1.1.0).
// Fonte: app tradingmindset/estrategias/*.md — mantenha sincronizado ao alterar o catálogo.

export type StrategyItem = { name: string; free?: boolean };
export type StrategyCategory = {
  id: string;
  label: string;
  tagline: string;
  items: StrategyItem[];
};

export const STRATEGIES_TOTAL = 20;

export const STRATEGY_CATEGORIES: StrategyCategory[] = [
  {
    id: "smart-money",
    label: "Smart Money",
    tagline: "Fluxo institucional, order blocks e caça de liquidez",
    items: [
      { name: "Order Block do Smart Money 15M", free: true },
      { name: "Breaker Block c/ Confluência Multi-TF" },
      { name: "Engolfo em Pivô da MM" },
      { name: "Liquidity Grab + Reversão" },
      { name: "Mitigation Block em Continuação Tendencial" },
    ],
  },
  {
    id: "momentum",
    label: "Momentum",
    tagline: "Explosão direcional, gaps e volume climático",
    items: [
      { name: "Breakout do VWAP com Volume Climático" },
      { name: "Gap de Continuação na Abertura" },
      { name: "Momentum Burst com RSI Esticado" },
      { name: "Pullback Rápido em Tendência Forte" },
    ],
  },
  {
    id: "mean-reversion",
    label: "Mean Reversion",
    tagline: "Retorno à média, exaustão e rejeição de níveis",
    items: [
      { name: "Pullback à MM20 c/ Pivô Confirmado", free: true },
      { name: "Fade nas Bandas de Bollinger com RSI Divergente" },
      { name: "Rejeição do VWAP em Intraday" },
      { name: "Reversão à Média 5M" },
    ],
  },
  {
    id: "consolidacao",
    label: "Consolidação",
    tagline: "Bandeiras, triângulos, ranges e compressão",
    items: [
      { name: "Bandeira Bull ou Bear Pós-Movimento", free: true },
      { name: "Range Bilateral nas Bandas" },
      { name: "Rompimento de Consolidação Tight" },
      { name: "Triângulo Simétrico no 15M" },
    ],
  },
  {
    id: "price-action",
    label: "Price Action",
    tagline: "Leitura de candle e estrutura multi-timeframe",
    items: [
      { name: "Inside Bar Tendencial Pós-Impulso" },
      { name: "Pin Bar em Zona-Chave Multi-TF" },
      { name: "Sistema de Reversão MTF (Al Brooks)" },
    ],
  },
];

// Checklist real da estratégia "Bandeira Bull ou Bear Pós-Movimento" (setup liberado no plano gratuito).
export const SAMPLE_STRATEGY = {
  name: "Bandeira Bull ou Bear Pós-Movimento",
  category: "Consolidação",
  summary: "Mastro forte + canal contra-direção + rompimento · Day Trade",
  checklist: [
    "Mastro ≥ 3× ATR confirmado",
    "Bandeira em canal claro (4+ toques alternados)",
    "Duração da bandeira ≤ 50% do mastro",
    "Volume decrescente durante a formação",
    "Volume no rompimento ≥ 1.5× média 20",
    "Close do candle de rompimento confirmou (não apenas pavio)",
    "RR ≥ 1:2 confirmado",
    "Sem evento macro nos próximos 30min",
  ],
};

export const STRATEGY_DISCLAIMER =
  "Conteúdo educacional de apoio à tomada de decisão. Não constitui recomendação de investimento nem sinal de entrada.";

