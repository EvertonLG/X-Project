# X Project - Reserva de Passagens Espaciais 🚀

O **X Project** é um projeto front-end desenvolvido em **React** e **TypeScript** que simula um sistema de reserva de passagens espaciais utilizando dados da **API pública da SpaceX**. O projeto foi criado para oferecer uma experiência imersiva e futurista, com design inspirado na temática espacial e funcionalidades interativas.

---

## 📌 Índice

1.  [Visão Geral](#-visão-geral)
2.  [Como Funciona](#-como-funciona)
3.  [Funcionalidades](#-funcionalidades)
4.  [Tecnologias Utilizadas](#-tecnologias-utilizadas)
5.  [Uso da API da SpaceX](#-uso-da-api-da-spacex)
6.  [Pré-requisitos](#-pré-requisitos)
7.  [Instalação e Execução](#-instalação-e-execução)
8.  [Scripts Disponíveis](#-scripts-disponíveis)
9.  [Estrutura do Projeto](#-estrutura-do-projeto)
10. [Conceitos e Bibliotecas](#-conceitos-e-bibliotecas)
11. [Testes](#-testes)
12. [Funcionalidades Futuras (Roadmap)](#-funcionalidades-futuras-roadmap)
13. [Deploy](#-deploy)
14. [Contribuição](#-contribuição)
15. [Licença](#-licença)
16. [Contato](#-contato)

---

## 🌌 Visão Geral

O **X Project** é uma aplicação web que permite aos usuários explorar e simular a reserva de passagens para voos espaciais da **SpaceX**. O projeto utiliza dados reais da **API pública da SpaceX** para exibir informações sobre lançamentos futuros, proporcionando uma interface moderna e futurista com animações e efeitos visuais para uma experiência envolvente.

---

## ⚙️ Como Funciona

A aplicação consiste em algumas etapas principais:

1.  **Busca de Voos**: Ao carregar a página inicial, a aplicação consulta a API da SpaceX para obter a lista de lançamentos futuros.
2.  **Formulário de Reserva**: O usuário preenche um formulário com seus dados pessoais (nome, idade, problemas de saúde) e seleciona um dos voos disponíveis na lista.
3.  **Validação**: Os dados do formulário são validados em tempo real para garantir que as informações inseridas estejam corretas e completas.
4.  **Confirmação**: Após o envio bem-sucedido do formulário, o usuário é redirecionado para uma página de confirmação que exibe os detalhes da sua reserva simulada.

---

## ✨ Funcionalidades

- **Listagem de Voos Futuros**: Exibe uma lista de voos futuros da SpaceX, obtidos através da API.
- **Formulário de Reserva Interativo**: Permite ao usuário preencher detalhes pessoais e selecionar um voo desejado.
- **Validação de Dados em Tempo Real**: Feedback instantâneo sobre a validade dos campos do formulário, como nome, idade e problemas de saúde.
- **Página de Confirmação de Reserva**: Apresenta um resumo dos detalhes da reserva após o envio bem-sucedido do formulário.
- **Design Responsivo**: Layout adaptável para uma boa experiência em diferentes tamanhos de tela (desktops, tablets e smartphones).
- **Experiência Visual Imersiva**: Efeitos de hover, animações de texto e desfoque de fundo para criar uma atmosfera futurista.

---

## 🛠 Tecnologias Utilizadas

- **React (`^19.0.0`)**: Biblioteca JavaScript para construção de interfaces de usuário dinâmicas e componentizadas.
- **TypeScript (`^5.4.5`)**: Superset do JavaScript que adiciona tipagem estática, aumentando a robustez e a manutenibilidade do código.
- **React Router DOM (`^6.24.1`)**: Biblioteca para gerenciamento de navegação e roteamento entre as diferentes páginas da aplicação.
- **Axios (`^1.8.3`)**: Cliente HTTP baseado em Promises para realizar requisições à API da SpaceX de forma eficiente.
- **React Bootstrap (`^2.10.9`)**: Framework de componentes UI pré-estilizados que agiliza o desenvolvimento da interface, seguindo o estilo Bootstrap.
- **CSS3**: Utilizado para estilizações personalizadas, incluindo animações, efeitos visuais e para garantir a responsividade do design.

---

## 🛰️ Uso da API da SpaceX

O projeto utiliza a **API pública e gratuita da SpaceX** para obter dados sobre os lançamentos.
- **Endpoint Principal**: `https://api.spacexdata.com/v4/launches/upcoming` (ou similar para voos futuros, verificar documentação da API da SpaceX para o endpoint mais atualizado).
- **Dados Utilizados**: Nome da missão (`name`), data do lançamento (`date_utc`), e outros detalhes relevantes que possam estar disponíveis para exibição na lista de voos.
- **Observação**: Por ser uma API pública, não requer chave de autenticação para os endpoints utilizados neste projeto.

---

## 📋 Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina as seguintes ferramentas:

- **[Node.js](https://nodejs.org/)** (versão 18.x ou superior recomendada)
- **npm** (versão 9.x ou superior) ou **yarn** (gerenciador de pacotes que acompanha o Node.js)

---

## 🚀 Instalação e Execução

Siga os passos abaixo para configurar e executar o projeto localmente:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/EvertonLG/x-project.git](https://github.com/EvertonLG/x-project.git)
    cd x-project
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Execute o projeto em modo de desenvolvimento:**
    ```bash
    npm start
    # ou
    yarn start
    ```
    Isso iniciará o servidor de desenvolvimento e abrirá a aplicação no seu navegador padrão.

4.  **Acesse a aplicação no navegador:**
    ```
    http://localhost:3000
    ```
    A porta pode variar se a 3000 já estiver em uso.

---

## 📜 Scripts Disponíveis

No arquivo `package.json`, você encontrará os seguintes scripts:

-   `npm start` ou `yarn start`: Executa a aplicação em modo de desenvolvimento.
-   `npm run build` ou `yarn build`: Compila a aplicação para produção na pasta `build`.
-   `npm test` ou `yarn test`: Executa os testes automatizados (se configurados).
-   `npm run eject` ou `yarn eject`: Remove a dependência de configuração única (`react-scripts`) e copia todas as configurações e dependências transitivas para o seu projeto. **Use com cautela!**
-   `npm run lint` ou `yarn lint`: Executa o ESLint para análise estática do código TypeScript/JavaScript.
-   `npm run format` ou `yarn format`: Formata o código utilizando o Prettier.

---

## 📂 Estrutura do Projeto

```plaintext
x-project/
├── public/                  # Arquivos estáticos (HTML base, favicons, etc.)
├── src/                     # Código fonte da aplicação
│   ├── assets/              # Imagens, fontes e outros assets
│   ├── components/          # Componentes React reutilizáveis
│   ├── contexts/            # (Sugestão) Contextos React para gerenciamento de estado global
│   ├── hooks/               # (Sugestão) Hooks customizados
│   ├── pages/               # Componentes que representam as páginas da aplicação
│   │   ├── Home.tsx         # Página inicial com formulário de reserva
│   │   └── Success.tsx      # Página de confirmação da reserva
│   ├── services/            # (Sugestão) Módulos para interagir com APIs externas (ex: SpaceX API)
│   ├── styles/              # (Sugestão) Arquivos de estilização globais ou temáticos
│   ├── types/               # (Sugestão) Definições de tipos TypeScript globais ou compartilhadas
│   ├── utils/               # (Sugestão) Funções utilitárias
│   ├── App.tsx              # Componente principal que configura o roteamento
│   ├── index.css            # Estilos globais aplicados à toda aplicação
│   ├── index.tsx            # Ponto de entrada da aplicação React
│   └── reportWebVitals.ts   # Monitoramento de performance (Core Web Vitals)
├── .eslintrc.js             # (Sugestão) Configuração do ESLint
├── .prettierrc.json         # (Sugestão) Configuração do Prettier
├── package.json             # Metadados do projeto, dependências e scripts
├── tsconfig.json            # Configuração do compilador TypeScript
└── README.md                # Documentação do projeto

```

## 🧠 Conceitos e Bibliotecas

### **Conceitos Utilizados**

- **Componentização**: A interface é dividida em componentes reutilizáveis, facilitando a manutenção e escalabilidade.
- **Estado e Ciclo de Vida**: Uso de hooks como `useState` e `useEffect` para gerenciar o estado dos componentes e efeitos colaterais.
- **Validação de Formulário**: Utilização de expressões regulares (Regex) e lógica customizada para garantir a integridade dos dados inseridos pelos usuários.
- **Roteamento**: `React Router DOM` é usado para criar uma Single Page Application (SPA) com navegação declarativa entre diferentes seções.
- **Requisições HTTP**: `Axios` é utilizado para buscar dados de forma assíncrona da API da SpaceX.
- **Tipagem Estática**: `TypeScript` é usado para adicionar tipos ao JavaScript, ajudando a prevenir erros em tempo de desenvolvimento e melhorando a autocompletação e refatoração.
- **Design Responsivo**: Técnicas de CSS (Flexbox, Grid, Media Queries) são usadas para adaptar o layout a diversos tamanhos de tela.
- **Efeitos Visuais**: Animações e transições CSS para enriquecer a experiência do usuário.

### **Bibliotecas Principais**

- **React** (`^19.0.0`)
- **TypeScript** (`^5.4.5`)
- **React Router DOM** (`^6.24.1`)
- **Axios** (`^1.8.3`)
- **React Bootstrap** (`^2.10.9`)
- **CSS3**

---

## 🧪 Testes

Atualmente, o projeto pode não ter uma suíte de testes configurada. Para futuras melhorias, recomenda-se:

-   **Configurar Jest e React Testing Library**: Para testes unitários e de integração dos componentes.
-   **Criar testes**:
    -   Para componentes individuais, verificando sua renderização e comportamento.
    -   Para fluxos de usuário, como o preenchimento e envio do formulário de reserva.
    -   Para a lógica de validação dos campos.
-   **Script de Teste**:
    ```bash
    npm test
    # ou
    yarn test
    ```

---

## 🚀 Funcionalidades Futuras (Roadmap)

-   [ ] **Gerenciamento de Estado Avançado**: Implementar Context API, Zustand ou Redux para um melhor gerenciamento do estado global, especialmente se a aplicação crescer.
-   [ ] **Autenticação de Usuário**: Permitir que usuários criem contas e salvem suas preferências ou histórico de reservas.
-   [ ] **Detalhes Avançados do Voo**: Mostrar mais informações da API da SpaceX (foguete, local de lançamento, clima, etc.).
-   [ ] **Filtros e Ordenação**: Adicionar opções para filtrar e ordenar a lista de voos.
-   [ ] **Paginação/Scroll Infinito**: Para melhor performance na listagem de muitos voos.
-   [ ] **Notificações**: Implementar sistema de notificações para feedback de ações (ex: reserva confirmada com sucesso).
-   [ ] **Internacionalização (i18n)**: Suporte para múltiplos idiomas.
-   [ ] **Acessibilidade (a11y)**: Realizar auditoria completa e aplicar melhorias de acessibilidade.
-   [ ] **Testes End-to-End (E2E)**: Adicionar testes E2E com Cypress ou Playwright para os fluxos mais críticos.

---

## ☁️ Deploy

O projeto pode ser facilmente implantado em plataformas como:

-   **Vercel**: Excelente para projetos React, com integrações automáticas com repositórios Git.
-   **Netlify**: Similar ao Vercel, oferece CI/CD e deploy simplificado.
-   **GitHub Pages**: Para projetos estáticos, pode ser uma opção gratuita e simples.

Para fazer o deploy, geralmente você precisará conectar seu repositório Git à plataforma escolhida e configurar o comando de build (`npm run build` ou `yarn build`) e o diretório de publicação (`build`).

---

## 🤝 Contribuição

Contribuições são muito bem-vindas! Se você deseja contribuir para o projeto, siga os passos abaixo:

1.  **Faça um fork do projeto.**
2.  **Crie uma nova branch para sua feature ou correção:**
    ```bash
    git checkout -b minha-feature
    ```
3.  **Desenvolva sua contribuição.**
4.  **Adicione e faça commit das suas alterações com mensagens claras:**
    ```bash
    git add .
    git commit -m "feat: Adicionando nova feature incrível"
    ```
5.  **Envie suas alterações para o seu fork:**
    ```bash
    git push origin minha-feature
    ```
6.  **Abra um Pull Request** no repositório original, detalhando as alterações realizadas.

---

## 📜 Licença

Este projeto está licenciado sob a **MIT License**. Consulte o arquivo `LICENSE` (se existente) para mais detalhes.

---

## 📞 Contato

**Nome:** Everton Lima Gomes
**E-mail:** everton_gomes1997@hotmail.com
**GitHub:** [EvertonLG](https://github.com/EvertonLG)
**LinkedIn:** [Everton Lima Gomes](https://www.linkedin.com/in/everton-lima-gomes/)

Obrigado por conferir o **X Project!** ✨
