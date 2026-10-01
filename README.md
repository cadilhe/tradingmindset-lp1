# Trading Mindset PRO — Landing Pages

Landing Pages de alta conversão para o produto **Trading Mindset & Discipline Companion (Trader PRO)** — plataforma focada em blindagem mental, controle de ansiedade/FOMO e consistência operacional para traders de alta performance.

---

## 🎯 Versões Disponíveis

- **Hub Central (`/`)**: Painel de visualização e alternância rápida entre as versões.
- **Versão 1 (`/v1`)**: Estilo *Workstation* — layout sóbrio e técnico inspirado em terminais financeiros.
- **Versão 2 (`/v2`)**: Estilo *Cyberpunk & Glassmorphism* — layout dinâmico com Tarot Trader interativo, Ondas Binaurais e S.O.S Anti-Tilt.

> 📚 Para orientações completas sobre rotas e links de checkout, consulte a [Documentação das Landing Pages](./docs/GUIA_LANDING_PAGES.md).

---

## 💳 Configuração do Checkout

O link de destino dos botões de compra é configurado centralmente em:
```
src/lib/offer.ts
```
Altere a constante `CHECKOUT_URL` para o link da sua plataforma de pagamento (ex: Kiwify, Hotmart).

---

## 🛠️ Desenvolvimento Local

### Pré-requisitos
- Node.js (v18+) e npm

### Instalação e Execução

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Gerar build de produção
npm run build

# Pré-visualizar build de produção
npm run preview
```
