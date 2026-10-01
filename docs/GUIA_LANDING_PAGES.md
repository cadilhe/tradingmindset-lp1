# 📖 Guia de Utilização e Configuração — Landing Pages Trading Mindset PRO

Este documento explica como utilizar e direcionar as diferentes versões das Landing Pages do projeto **Trading Mindset PRO**, além de detalhar o passo a passo para alterar o link de checkout (Kiwify, Hotmart, Eduzz, etc.).

---

## 🎯 1. Visão Geral das Versões

O projeto unifica duas abordagens de design e copy de alta conversão em uma única aplicação construída com TanStack Start, React e Tailwind CSS:

```
                  ┌───────────────────────────────┐
                  │          Hub Central          │
                  │             ( / )             │
                  └───────┬───────────────┬───────┘
                          │               │
            ┌─────────────┴─────┐   ┌─────┴─────────────┐
            │   Versão 1 (/v1)  │   │   Versão 2 (/v2)  │
            │  Estilo Workstation│  │  Estilo Cyberpunk  │
            └───────────────────┘   └───────────────────┘
```

---

### 🏛️ Versão 1: Estilo *Workstation* (Terminal Financeiro)
* **Rota direta:** `/v1` (ex: `https://seudominio.com/v1`)
* **Componente principal:** `src/components/lp1/LandingV1.tsx`
* **Conceito & Identidade:**
  - Design sóbrio e profissional inspirado em interfaces de workstations e terminais de trading (tons de ardósia, acentos âmbar/dourado e verde esmeralda).
  - Foco em disciplina mental, consistência operacional, plano de trading e blindagem contra perdas desnecessárias.
* **Melhor uso:**
  - Tráfego direto de traders experientes e público institucional/técnico.
  - Campanhas que valorizam seriedade, ferramentas práticas e métricas de desempenho.

---

### ⚡ Versão 2: Estilo *Cyberpunk & Glassmorphism* (Interativa)
* **Rota direta:** `/v2` (ex: `https://seudominio.com/v2`)
* **Componente principal:** `src/components/lp2/LandingV2.tsx`
* **Conceito & Identidade:**
  - Visual futurista e imersivo com efeitos de *glassmorphism*, glow ciano/esmeralda e componentes interativos:
    - **Tarot Trader interativo:** Cartas de reflexão antes da sessão.
    - **Ondas Binaurais & Áudio:** Foco mental e controle de estresse.
    - **Botão de Emergência S.O.S Anti-Tilt:** Intervenção imediata contra *revenge trading*.
    - **Score de Disciplina diário.**
* **Melhor uso:**
  - Campanhas de tráfego pago (Meta Ads, TikTok Ads, YouTube Ads) com foco em forte apelo visual e emocional (dor do FOMO / Tilt).
  - Testes A/B contra a Versão 1.

---

### 🎛️ Hub Central
* **Rota:** `/` (ex: `https://seudominio.com/`)
* **Arquivo:** `src/routes/index.tsx`
* **Função:**
  - Painel de controle que permite alternar e visualizar as duas versões na mesma interface ou navegar diretamente entre elas.

---

## 🚀 2. Como Escolher uma Versão Específica para a Página Principal (`/`)

Se você desejar que ao acessar a raiz do site (`https://seudominio.com/`) o usuário veja diretamente a **Versão 1** ou a **Versão 2** (em vez do Hub comparativo):

1. Abra o arquivo `src/routes/index.tsx`.
2. Substitua o retorno do componente `IndexPage()` para renderizar diretamente a versão desejada:

### Para definir a **Versão 1** como principal:
```tsx
import { createFileRoute } from "@tanstack/react-router";
import { LandingV1 } from "@/components/lp1/LandingV1";

export const Route = createFileRoute("/")({
  component: LandingV1,
});
```

### Para definir a **Versão 2** como principal:
```tsx
import { createFileRoute } from "@tanstack/react-router";
import { LandingV2 } from "@/components/lp2/LandingV2";

export const Route = createFileRoute("/")({
  component: LandingV2,
});
```

> [!NOTE]
> Mesmo definindo uma versão na raiz, as rotas `/v1` e `/v2` continuarão disponíveis individualmente para testes de links específicos de anúncios.

---

## 💳 3. Como Alterar o Link de Checkout

O link de pagamento/checkout está **centralizado** para que você não precise alterar botão por botão em cada landing page.

### Passo a passo:

1. Abra o arquivo:
   📁 **`src/lib/offer.ts`**

2. Localize a linha que exporta a constante `CHECKOUT_URL`:
   ```ts
   // Troque por seu link real de checkout (Kiwify / Hotmart / Eduzz).
   export const CHECKOUT_URL = "https://pay.kiwify.com.br/seu-checkout";
   ```

3. Substitua `"https://pay.kiwify.com.br/seu-checkout"` pelo link oficial do seu produto na plataforma de pagamento. Exemplo:
   ```ts
   export const CHECKOUT_URL = "https://pay.kiwify.com.br/AbC123x";
   ```

4. Salve o arquivo.

> [!TIP]
> Todos os botões de CTA das versões **V1** e **V2** importam automaticamente essa constante. Ao alterar esse único arquivo, todos os botões de compra serão atualizados simultaneamente.

---

## 🌐 4. Parâmetros de Rastreamento (UTMs e Afiliados)

Se você utiliza parâmetros UTM (como `?utm_source=meta&utm_campaign=blackfriday`), o link de checkout pode receber esses parâmetros automaticamente se você repassá-los ou configurá-los diretamente na sua URL de destino da campanha.

---

## 🛠️ 5. Comandos Úteis para Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Iniciar servidor local
npm run dev

# Gerar build de produção para validação
npm run build
```
