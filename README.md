# Jogo da Memória

Jogo da memória feito com Vue 3 e TypeScript. O jogador digita o seu nome, encontra os 10 pares de cartas
espalhados no tabuleiro e no final entra em um ranking que guarda quem concluiu o jogo com menos tentativas.

## Como o jogo funciona

1. Na tela inicial o jogador digita o nome. Sem nome o campo é marcado como inválido e o jogo não começa.
2. Ao entrar no tabuleiro, as 20 cartas (10 símbolos duplicados) são embaralhadas e ficam reveladas por
   3 segundos para o jogador tentar memorizar as posições.
3. Depois disso todas viram e o jogador clica em duas cartas por vez:
   - **par correto**: as cartas ficam com a borda verde e o contador de pares aumenta;
   - **par errado**: as cartas ficam com a borda vermelha por 1,5 segundo, o tabuleiro é bloqueado para
     evitar cliques durante a animação e o contador de tentativas aumenta.
4. Quando todos os pares são encontrados, o resultado é salvo no ranking e uma modal de vitória aparece com
   as opções de jogar de novo ou voltar para o ranking.

O contador de **tentativas** registra apenas os pares errados, então quanto menor o número, melhor a
colocação no ranking.

## Tecnologias

| Ferramenta | Uso no projeto |
| --- | --- |
| [Vue 3](https://vuejs.org/) | Composition API com `<script setup>` em todos os componentes |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem de props, emits e dos modelos de carta e ranking |
| [Vite](https://vite.dev/) | Servidor de desenvolvimento e build |
| [Vue Router](https://router.vuejs.org/) | Rotas da tela inicial e do jogo, com guard de acesso |
| [Pinia](https://pinia.vuejs.org/) | Estado do jogador, dos contadores e do ranking |
| [ESLint](https://eslint.org/) + [oxlint](https://oxc.rs/) | Análise estática |
| [Prettier](https://prettier.io/) | Formatação |

A estilização é feita com CSS escrito à mão dentro dos próprios componentes, usando `<style scoped>` e
aninhamento nativo. O Tailwind CSS está instalado e importado em `src/styles/main.css`, mas serve apenas
como base — as classes utilitárias não são usadas.

## Como rodar o projeto

Requisitos: Node.js `^22.18.0` ou `>=24.12.0`.

```sh
npm install
npm run dev
```

O terminal mostra o endereço local (por padrão `http://localhost:5173`).

Para gerar a versão de produção e visualizá-la:

```sh
npm run build
npm run preview
```

## Scripts

| Script | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento com hot reload |
| `npm run build` | Checagem de tipos + build de produção |
| `npm run build-only` | Build de produção sem checar tipos |
| `npm run preview` | Serve a build de produção localmente |
| `npm run type-check` | Checagem de tipos com `vue-tsc` |
| `npm run lint` | Roda oxlint e ESLint com correção automática |
| `npm run format` | Formata a pasta `src/` com Prettier |

## Estrutura

```
src/
├── components/
│   ├── game/          CardsComponent, GameBoard, RankingComponent, VictoryComponent
│   └── ui/            DefaultButton, DefaultInput, DefaultModal
├── composables/       useGame.ts — regras do jogo
├── constants/         data.ts — símbolos das cartas e configurações
├── layouts/           DefaultLayout.vue — cabeçalho fixo
├── router/            index.ts, routes.ts, guard.ts
├── stores/            userStore.ts, rankingStore.ts
├── styles/            main.css — reset e estilos globais
├── types/             CardType.ts, RankingType.ts
└── views/             HomeView.vue, GameView.vue
```

O alias `@` aponta para `src/`.

## Organização do estado

**`useGame`** concentra as regras da partida: embaralhar as cartas, revelar, comparar os pares, bloquear o
tabuleiro durante a animação de erro e detectar o fim do jogo. É consumido pelo `GameBoard`, que cuida do
tempo de revelação inicial e da exibição da modal de vitória.

**`userStore`** guarda o nome do jogador e os contadores da partida (`countRetry` e `countPairs`), zerados a
cada novo jogo.

**`rankingStore`** guarda a lista de jogadores que concluíram o jogo, expõe os 10 melhores ordenados por
menor número de tentativas e persiste tudo no `localStorage` na chave `memoryGameRanking`. Por isso o
ranking sobrevive ao recarregar a página, mas é local de cada navegador.

A rota `/game` usa a flag `requiresAuth` e o guard em `src/router/guard.ts` redireciona para a tela inicial
caso não exista um nome preenchido.

## Responsividade

O layout funciona de telas grandes até aparelhos de 360px. Os breakpoints usados são **768px**, **568px** e
**390px**, e neles o tabuleiro passa de 5 para 4 colunas, o espaçamento e o tamanho das cartas diminuem, e
o campo de nome e o botão deixam de ficar lado a lado e passam a se empilhar.
