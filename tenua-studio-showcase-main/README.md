# <img src="src/assets/tenua-simbolo.png" height="60" width="60" align="center" alt="Tenua Symbol" style="vertical-align: middle; margin-right: 10px;"> Tenua Studio Showcase

> **⚠️ DOCUMENTO DE USO ESTRITAMENTE INTERNO**
> Este repositório contém o código-fonte proprietário da vitrine digital da Tenua. A distribuição não autorizada é proibida.

---

## 🏢 Visão Geral do Produto

O **Tenua Studio Showcase** é o principal ponto de contato digital entre o Ateliê Tenua e seus clientes de alto valor.

**Problema de Negócio:** Anteriormente, o processo de vendas dependia exclusivamente do atendimento via WhatsApp/Instagram, sem um catálogo consolidado ou presença de marca que refletisse o posicionamento "premium/artesanal" da empresa.

**Solução:** Uma aplicação web de alta performance que serve como:
1.  **Catálogo Vivo:** Apresentação dinâmica de produtos (Bolsas, Mantas, Tapetes).
2.  **Brand Experience:** Transmissão dos valors da marca (Feito à mão, Tempo, Dedicação).
3.  **Funnel de Conversão:** Direcionamento qualificado para o WhatsApp Comercial.

**Público Alvo:** Clientes finais (B2C) em busca de decoração de luxo e peças exclusivas.

---

## 🏗️ Arquitetura e Decisões Técnicas

A stack foi escolhida priorizando **estabilidade, performance e manutenibilidade** a longo prazo.

### Frontend (SPA)
*   **React 18 + TypeScript:** Tipagem estrita é obrigatória para reduzir bugs em runtime e facilitar o onboarding de novos devs.
*   **Vite:** Build tool escolhida pela velocidade de HMR (Hot Module Replacement) e otimização de bundle.
*   **Tailwind CSS + Shadcn/UI:** Padronização visual sem "reinventar a roda". O Design System segue tokens estritos (cores, espaçamentos) definidos no Figma.
*   **TanStack Query:** Gerenciamento de estado de servidor (assíncrono) para separar a camada de dados da UI.

### Infraestrutura & CI/CD
*   **Hospedagem:** Vercel (Frontend Cloud) para edge caching global.
*   **Pipeline:** CI via GitHub Actions (validação de Lint/Typescript) e CD automático na branch `main`.

---


## ⚙️ Ambiente de Desenvolvimento (Onboarding)

Siga este guia estrito para configurar seu ambiente.

### 1. Pré-requisitos
*   **Node.js**: `v18.17.0` ou superior (Sugerimos usar `nvm` ou `volta`).
*   **Package Manager**: `npm` (padrão do projeto) ou `bun` (aprovado para CI local).
*   **Editor**: VS Code com extensões: *ESLint, Prettier, Tailwind CSS IntelliSense*.

### 2. Configuração de Variáveis
⚠️ **NUNCA comite chaves de API ou segredos no repositório.**

Copie o exemplo para criar seu arquivo local:
```bash
cp .env.example .env
```

Edite o `.env` com as chaves de desenvolvimento (solicite ao Tech Lead se necessário):
```env
VITE_API_URL=http://localhost:3000
VITE_WHATSAPP_NUMBER=5589999812679
```

### 3. Instalação e Execução
```bash
# Instalar dependências (clean install recomendado)
npm ci

# Rodar servidor local
npm run dev
```

O sistema estará disponível em: `http://localhost:8080`

---

## 🤖 Scripts e Automação

Utilize os scripts padronizados no `package.json` para manter a qualidade do código.

| Comando | Função | Quando usar |
| :--- | :--- | :--- |
| `npm run dev` | Inicia servidor de desenvolvimento | Durante a codificação diária |
| `npm run build` | Gera build de produção (`/dist`) | Antes de abrir Pull Request |
| `npm run preview` | Testa o build de produção localmente | Para verificar assets/caminhos pós-build |
| `npm run lint` | Roda ESLint + verificação de tipos | **Obrigatório** antes de commitar |

---

## 📸 Galeria da Aplicação

### 🏠 Home & Hero
![Hero](public/docs/screenshots/01-Hero.png)

### 🧶 História & Essência
| História | Essência |
| :---: | :---: |
| ![História](public/docs/screenshots/02-Historia.png) | ![Essência](public/docs/screenshots/03-Essencia.png) |

### 👜 Coleções
![Produtos](public/docs/screenshots/04-Colecoes.png)

### 🖼️ Portfólio
![Galeria](public/docs/screenshots/05-Portfolio.png)

### 📦 Encomendas
![Encomendar](public/docs/screenshots/06-Encomendar.png)

### ℹ️ Suporte
| Cuidados | FAQ |
| :---: | :---: |
| ![Cuidados](public/docs/screenshots/07-Cuidados.png) | ![FAQ](public/docs/screenshots/08-FAQ.png) |

### 📞 Contato
![Contato](public/docs/screenshots/09-Contato.png)

---

## 🚀 Fluxo de Deploy

O deploy é automatizado via integração Vercel <-> GitHub.
1.  **Feature Branches**: Deploies de preview gerados automaticamente a cada PR.
2.  **Main Branch**: Deploy de produção imediato após merge aprovado.

**Regra de Ouro:** A branch `main` deve estar sempre "deployable". Bloqueio de merge se o `npm run build` falhar.

---

## 👨‍💻 Autoria e Manutenção

**Tenua Engineering Team**

*   **Tech Lead:** Zacarias Ramos
*   **Frontend Eng:** Zacarias Ramos
*   **Design:** Zacarias Ramos

---

<div align="center">
  <p>© 2026 Tenua. Todos os direitos reservados.</p>
  <p><i>Uso estritamente interno e proprietário. Não divulgar.</i></p>
</div>
