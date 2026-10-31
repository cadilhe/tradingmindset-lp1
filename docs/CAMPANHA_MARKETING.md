# 📣 Campanha de Marketing — Trading Mindset & Discipline (Trader PRO)

> **Escopo:** divulgação do aplicativo e geração de vendas do plano **Trader PRO** (landing pages `/v1` e `/v2`).
> **Destaque de lançamento:** nova **Biblioteca de 20 Estratégias Operacionais** (app v1.1.0).
> **Status:** plano para execução. Metas e orçamentos abaixo são **hipóteses de partida** e devem ser ajustados com os dados reais das primeiras semanas.

---

## 1. Resumo da Oferta (fatos do produto)

| Item | Detalhe |
| :--- | :--- |
| Produto | Trading Mindset & Discipline Companion — app Android/Web |
| Plano pago | **Trader PRO**: de R$ 297,00 por **12x de R$ 14,76** ou **R$ 147,00 à vista** |
| Garantia | 7 dias |
| Checkout | Hotmart/Kiwify, configurado em `src/lib/offer.ts` (`CHECKOUT_URL`) |
| Degustação gratuita | 3 áudios + **3 estratégias** (`FREE`) + Protocolo, S.O.S Tilt, Tarot (1 carta/dia) |
| Conteúdo PRO | +20 áudios/binaurais, download offline, **20 estratégias com checklist**, Tarot 90 dias, sincronização em nuvem |
| Landings | `/v1` Workstation (sóbria, técnica) · `/v2` Cyberpunk (visual, emocional) |

**Pilares do app (para a comunicação):** Tarot Trader · Audioteca/Binaurais · Protocolo & Score de Disciplina · S.O.S Anti-Tilt · Radar de Notícias · **Biblioteca de Estratégias (novo)** · Web + Mobile.

---

## 2. Posicionamento e Mensagem

**Promessa central:** *"Você já domina o gráfico. Agora domine o que acontece entre as suas duas orelhas."*

**Território de marca:** disciplina e processo, **não** sinais, **não** lucro rápido. O produto é uma ferramenta de preparo emocional e de execução com critério.

**Novo ângulo de lançamento (Estratégias):**
> *"Disciplina também é saber exatamente quando o setup está completo."*
> 20 playbooks com regras objetivas e um checklist para validar **antes de clicar**.

**Por que esse ângulo funciona:** liga a dor emocional (impulso, revenge trading) a uma solução concreta e demonstrável (checklist), e dá uma razão nova para quem já conhece o app voltar a olhar a oferta.

### Pilares de conteúdo
1. **Dor** — o ciclo do tilt (08:30 análise perfeita → 10:35 colapso).
2. **Processo** — checklist, score, rotina pré e pós-mercado.
3. **Ferramenta** — demonstrações do app (Tarot, S.O.S, estratégias).
4. **Educação** — psicologia de risco, viés cognitivo, gestão de posição.

---

## 3. Público-Alvo e Personas

| Persona | Perfil | Dor principal | Gancho | Landing |
| :--- | :--- | :--- | :--- | :--- |
| **A. O Reincidente** | Day trader de índice/dólar (B3) que já devolveu semanas de lucro em um dia | Revenge trading, overtrading | "20 minutos de descontrole" | `/v2` |
| **B. O Metódico** | Trader com setup definido que quer rotina e métricas | Inconsistência, falta de processo | Score de Disciplina + checklist | `/v1` |
| **C. O Estudioso de Setups** | Trader que busca padrões (Smart Money, price action) | Entra sem critério repetível | 20 estratégias com checklist | `/v1` (seção `#estrategias`) |
| **D. O Iniciante Cuidadoso** | Começando em day trade/forex/cripto | Medo de quebrar a conta | Degustação grátis + garantia | `/v2` |

---

## 4. Funil e Jornada

```
Topo (descoberta)      →  Meio (consideração)           →  Fundo (decisão)
Reels/Shorts/Posts        Landing /v1 ou /v2                Oferta Trader PRO
Carta do Tarot do dia     Demo: checklist de estratégia     Garantia 7 dias
Conteúdo de psicologia    Isca grátis: app (Play Store)     Remarketing
                          E-mail/WhatsApp (nutrição)
```

**Duas portas de entrada:**
1. **Direta:** anúncio → landing → checkout (público quente ou conteúdo de dor forte).
2. **Via degustação:** anúncio/orgânico → instalar o app grátis (3 áudios + 3 estratégias) → paywall dentro do app → upgrade. O app já converte via `PaywallModal`.

> ⚠️ **Compliance Google Play:** o app segue o modelo "Reader/multiplataforma" e **não exibe botão de compra direto** no paywall. Não adicionar links de checkout dentro do app. A venda acontece na web (landing).

---

## 5. Canais e Táticas

### 5.1 Conteúdo Orgânico (Instagram, TikTok, YouTube Shorts, X)
Frequência sugerida: **4–5 posts/semana** + stories diários.

| Formato | Ideia | Exemplo de gancho (primeiros 3s) |
| :--- | :--- | :--- |
| Reels/Shorts | "Carta do Tarot Trader do dia" (1 arquétipo + antídoto) | "Hoje a carta é O Vingador. Se você acabou de tomar stop, assista isso." |
| Reels/Shorts | Demo do **checklist** de uma estratégia | "Antes de clicar, marque esses 8 itens. Se faltar um, não entra." |
| Carrossel | "Uma estratégia por dia": conceito + quando funciona/não funciona | "Bandeira Bull/Bear: quando NÃO operar." |
| Carrossel | Linha do tempo do tilt (08:30 → 10:35) | "Como 20 minutos destroem 2 semanas." |
| Vídeo longo (YT) | "As 5 categorias de setup e o erro de cada uma" | Série de 5 episódios (uma por categoria) |
| Story/Enquete | "Você respeitou seu stop hoje?" | Engajamento + coleta de dor |

**Série de lançamento "20 Setups, 20 Dias":** um post/dia mostrando uma estratégia (usar os diagramas de `estrategias/images/`), sempre fechando com o **checklist** e CTA para o app. Cobre as 5 categorias e gera conteúdo reaproveitável por 4 semanas.

### 5.2 Mídia Paga

**Meta Ads (Instagram/Facebook)** — canal principal de teste.
- **Objetivo:** Vendas (conversão de checkout) + tráfego para landing.
- **Públicos:** interesses (day trade, mini índice, mini dólar, forex, price action, análise técnica), lookalike de compradores quando houver base, remarketing de visitantes da landing.
- **Testes A/B:** `/v1` vs `/v2` (mesmo criativo, landing diferente).

**Google Ads** — Search + YouTube.
- Palavras de intenção: "como controlar emocional no trade", "revenge trading", "disciplina day trade", "checklist day trade", "setups de smart money".
- YouTube: pré-roll curto com a demo do checklist.

**TikTok Ads** — criativos nativos (vídeo cru, voz humana, demo de tela).

### 5.3 E-mail e WhatsApp (nutrição)
Sequência para quem baixou o app grátis ou deixou e-mail (ver seção 8).

### 5.4 Parcerias e Afiliados
- Programa de afiliados na Hotmart (comissão sugerida: **a definir** conforme margem).
- Parcerias com criadores de conteúdo de trading (permuta de acesso PRO por review honesto).
- Lives conjuntas: "Psicologia do trader + ao vivo: validando um setup com checklist".

### 5.5 ASO (Google Play)
- Atualizar **descrição completa** e **screenshots** incluindo a aba **Estratégias** (ver `docs/ESTEIRA_PUBLICACAO.md` no projeto do app).
- Notas de versão 1.1.0 com o novo módulo.
- Palavras-chave: disciplina trader, checklist day trade, psicologia do trader, estratégias day trade.

---

## 6. Peças Criativas (copy pronta)

### 6.1 Anúncios — Meta/TikTok (texto principal)

**Anúncio 1 — Dor (Persona A / `/v2`)**
> Você já domina o gráfico. O problema é o que acontece depois do stop.
> 20 minutos de descontrole podem apagar semanas de consistência.
> O Trading Mindset é o copiloto que te segura antes do revenge trading: S.O.S Anti-Tilt, protocolo diário e Tarot Trader para diagnosticar seu viés antes da abertura.
> 👉 Conheça o Trader PRO. 7 dias de garantia.

**Anúncio 2 — Estratégias (Persona C / `/v1`)** *(lançamento)*
> Disciplina também é saber quando o setup está COMPLETO.
> Nova Biblioteca com 20 estratégias operacionais — Smart Money, Momentum, Mean Reversion, Consolidação e Price Action — cada uma com regras de entrada, stop, alvo e um checklist interativo para validar antes de clicar.
> Teste 3 estratégias grátis no app.
> *Conteúdo educacional. Não é recomendação de investimento.*

**Anúncio 3 — Processo (Persona B)**
> Quem sobrevive no mercado tem rotina, não adrenalina.
> Checklist pré-market, Sniper Entry Check, Score de Disciplina de 0 a 100% e alertas 15 min antes de Payroll, CPI, FOMC e Copom.
> Tudo no seu celular ou navegador, até em modo avião.

**Anúncio 4 — Degustação (Persona D)**
> Antes de pagar qualquer coisa: baixe o app grátis.
> 3 áudios, 3 estratégias completas, S.O.S Anti-Tilt e uma carta de Tarot por dia. Gostou? O PRO libera o restante, com 7 dias de garantia.

### 6.2 Headlines (testar)
1. "Domine o que acontece entre as suas duas orelhas."
2. "20 estratégias. 1 checklist. Zero entradas por impulso."
3. "O stop não é o problema. O que vem depois é."
4. "Seu setup está completo? Marque os 8 itens."
5. "Pare de sabotar o seu próprio setup."

### 6.3 CTAs
- "Quero desbloquear meu acesso PRO"
- "Testar 3 estratégias grátis"
- "Baixar o app grátis"
- "Ver as 20 estratégias"

### 6.4 Roteiro de Vídeo (30s) — "Checklist antes do clique"
| Tempo | Cena | Fala/Texto |
| :--- | :--- | :--- |
| 0–3s | Gráfico com bandeira formada | "Vai entrar nessa bandeira? Espera." |
| 3–12s | Tela do app: checklist da estratégia, itens marcando | "Mastro ≥ 3× ATR? Volume decrescente? Rompimento com volume? Marque cada item." |
| 12–20s | Barra chega a 100% | "Só quando o setup está completo, você clica." |
| 20–27s | Mostra categorias + selo PRO | "São 20 estratégias em 5 categorias, com diagramas e estudos de caso." |
| 27–30s | CTA | "Baixe grátis e teste 3 estratégias." |

### 6.5 Roteiro de Vídeo (30s) — "Carta do dia"
Abertura na carta virando ("O Vingador") → leitura do viés ("Seu ego quer recuperar. Seu plano quer preservar.") → antídoto → CTA para tirar a carta do dia no app.

---

## 7. Cronograma (6 semanas)

| Semana | Foco | Ações |
| :--- | :--- | :--- |
| **0 (pré)** | Preparação | Publicar v1.1.0 na Play Store (resolver integridade/licenciamento do Teste Interno antes), instalar Pixel/Eventos de conversão nas landings, gravar banco de criativos, subir criativos para teste |
| **1** | Lançamento do módulo | Anúncio "Novidade: 20 Estratégias" (orgânico + paid), e-mail para a base, início da série "20 Setups, 20 Dias" |
| **2–3** | Teste e aprendizado | A/B de criativos e de `/v1` vs `/v2`; pausar o que não converte; escalar o melhor |
| **4** | Prova e urgência honesta | Depoimentos/feedbacks reais, remarketing forte, live com demonstração |
| **5** | Escala | Aumentar orçamento nos conjuntos vencedores, lookalikes, afiliados |
| **6** | Retrospectiva | Consolidar métricas, decidir próximo ciclo (ver seção 10) |

---

## 8. Automação de E-mail / WhatsApp

**Sequência de 5 mensagens para quem baixou o app / deixou contato:**

| # | Quando | Assunto / Gancho | Conteúdo |
| :--- | :--- | :--- | :--- |
| 1 | Dia 0 | "Bem-vindo: comece pelo S.O.S" | Como usar protocolo, S.O.S e a carta do dia |
| 2 | Dia 1 | "Sua primeira estratégia grátis" | Guia da "Bandeira Bull/Bear" + como usar o checklist |
| 3 | Dia 3 | "Por que o stop não é o problema" | Conteúdo de psicologia + áudio de degustação |
| 4 | Dia 5 | "As outras 17 estratégias" | Lista por categoria + oferta PRO |
| 5 | Dia 7 | "Última chamada da oferta" | Resumo de benefícios + garantia de 7 dias |

> Respeitar **LGPD**: coletar consentimento, oferecer descadastro em todo e-mail.

---

## 9. Orçamento e Metas (hipóteses de partida)

> Os valores abaixo são **suposições para planejamento**, não resultados garantidos. Substituir por dados reais após as semanas 1–2.

**Orçamento sugerido (teste de 6 semanas):**

| Canal | % do orçamento |
| :--- | :--- |
| Meta Ads | 50% |
| Google/YouTube Ads | 20% |
| TikTok Ads | 10% |
| Produção de criativos/influenciadores | 15% |
| Ferramentas (e-mail, automação) | 5% |

**Conta de ponto de equilíbrio (com o preço atual):**
- Ticket à vista: **R$ 147,00** (parcelado totaliza ~R$ 177). Descontando taxas da plataforma e eventuais reembolsos, a margem por venda é menor que o valor cheio.
- **CAC máximo = margem líquida por venda.** Defina o teto de CAC antes de escalar; se o CAC ultrapassar a margem, pare e otimize criativo/landing.

**KPIs a acompanhar:**

| Etapa | Métrica |
| :--- | :--- |
| Alcance | CPM, alcance, visualizações de 3s |
| Interesse | CTR do link, CPC |
| Landing | Taxa de clique no CTA, rolagem até `#estrategias`, tempo na página |
| Conversão | Taxa de checkout iniciado, **taxa de compra**, CAC |
| App | Instalações, ativação (abriu Estratégias), conversão free → PRO |
| Pós-venda | Taxa de reembolso, retenção |

---

## 10. Medição e Experimentos

1. **Pixels/Eventos:** instalar Meta Pixel + Google Tag/TikTok Pixel nas landings. Eventos: `ViewContent`, clique em CTA, `InitiateCheckout`, `Purchase` (via Hotmart/Kiwify).
2. **UTMs padronizadas:** `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` (nome do criativo) em todos os links (ver `docs/GUIA_LANDING_PAGES.md`, seção de rastreamento).
3. **Testes prioritários:**
   - `/v1` × `/v2` com o mesmo criativo.
   - Anúncio "Dor" × anúncio "Estratégias".
   - Oferta à vista × parcelada em destaque.
   - CTA "Comprar" × "Testar grátis".
4. **Regra de decisão:** só escalar conjuntos com dados suficientes (volume mínimo de cliques/checkouts) para evitar decisões por acaso.

---

## 11. Conformidade e Boas Práticas ⚠️

- **Mercado financeiro:** plataformas de anúncio restringem promessas de ganho. **Não prometer lucro, "renda extra", resultados nem usar prints de ganhos.** Foco em disciplina, psicologia e educação.
- **Aviso obrigatório:** manter "ferramenta de apoio educacional e comportamental; não constitui recomendação de investimento" nas peças e nas landings.
- **Estratégias ≠ sinais:** deixar claro que os playbooks são educacionais; o público "sala de sinais" não é o alvo.
- **Depoimentos:** usar apenas feedbacks **reais e autorizados**. Não inventar prova social.
- **Urgência honesta:** o cronômetro exibido nas landings é um contador reiniciável de interface. **Só usar linguagem de escassez/prazo nos anúncios se a oferta realmente tiver prazo.** Caso contrário, trocar por argumento de valor para evitar problemas de credibilidade e de política das plataformas.
- **Garantia:** comunicar exatamente a política da plataforma de pagamento (7 dias).
- **Dados pessoais:** LGPD para e-mail/WhatsApp; política de privacidade já em `public/privacidade.html` (app).
- **Google Play:** não incluir link de compra dentro do app (modelo Reader).

---

## 12. Checklist de Execução

**Antes de rodar anúncios**
- [ ] v1.1.0 publicada na Play Store e funcionando (resolver a tela de licenciamento do Teste Interno antes de enviar tráfego ao app)
- [ ] `CHECKOUT_URL` real em `src/lib/offer.ts`
- [ ] Pixels e eventos de conversão instalados e testados
- [ ] UTMs definidas e documentadas
- [ ] Landings testadas no celular (`/v1` e `/v2`, seção `#estrategias`)
- [ ] Screenshots da loja atualizados com a aba Estratégias
- [ ] Banco de criativos (≥ 6 vídeos + 5 carrosséis) pronto
- [ ] Textos revisados para conformidade (sem promessa de ganho)

**Durante**
- [ ] Revisão diária de métricas nas semanas 1–2
- [ ] Pausar criativos com CTR/CPA ruins; escalar vencedores
- [ ] Responder comentários e DMs (prova social e objeções)

**Depois**
- [ ] Relatório consolidado (CAC, taxa de compra, reembolso, instalação → PRO)
- [ ] Definir próximo ciclo: novas estratégias, novos áudios, ofertas sazonais

---

## 13. Ideias de Próximos Ciclos

- Campanha de **Black Friday / datas sazonais** (somente se houver oferta real).
- Lançamento de **novas estratégias** como conteúdo recorrente (reforça retenção e justifica o PRO).
- **Desafio de 21 dias de disciplina** usando o Protocolo e o Score (conteúdo + comunidade).
- **Programa de indicação** para assinantes.

---

> 📌 **Arquivos relacionados:** `docs/GUIA_LANDING_PAGES.md` (rotas, checkout, UTMs) · `src/lib/strategies.ts` (dados da seção de estratégias) · projeto do app: `docs/DOCUMENTACAO.md`, `docs/ESTEIRA_PUBLICACAO.md`.

