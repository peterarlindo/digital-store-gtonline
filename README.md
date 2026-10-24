# Digital Store --- GTOnline 4.0

Projeto final da disciplina de Front-end do programa **Geração Tech
Online 4.0 (GTOnline 4.0)**.

A aplicação foi desenvolvida em **React com TypeScript**, utilizando
**Bootstrap**, com base na documentação do projeto Digital Store e na
proposta visual apresentada no Figma.

## Sobre o projeto

O objetivo do projeto é desenvolver uma aplicação de e-commerce com uma
estrutura organizada em componentes React e com as principais telas
solicitadas na atividade final:

-   Home
-   Listagem de produtos
-   Visualização de produto

O projeto foi desenvolvido individualmente.

## Tecnologias utilizadas

-   React 18
-   TypeScript
-   Bootstrap 5
-   React Router DOM
-   HTML5
-   CSS3
-   JavaScript/TypeScript

## Principais páginas

### Home

Página inicial da loja, contendo a estrutura visual principal da Digital
Store, navegação, seções de produtos e demais elementos apresentados no
projeto.

### Listagem de produtos

Página destinada à apresentação dos produtos disponíveis, com
organização em cards e estrutura de filtros e ordenação conforme a
proposta visual.

### Visualização de produto

Página de detalhes do produto, com galeria de imagens, informações,
opções do produto e área de compra.

## Estrutura do projeto

``` text
digital-store/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   │   ├── BuyBox/
│   │   ├── FilterGroup/
│   │   ├── Footer/
│   │   ├── Gallery/
│   │   ├── Header/
│   │   ├── Layout/
│   │   ├── Logo/
│   │   ├── ProductCard/
│   │   ├── ProductListing/
│   │   ├── ProductOptions/
│   │   └── Section/
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── ProductListingPage.tsx
│   │   └── ProductViewPage.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── colors.css
│   └── types.ts
├── package.json
├── package-lock.json
└── tsconfig.json
```

## Como executar o projeto

### 1. Clonar o repositório

``` bash
git clone https://github.com/peterarlindo/digital-store-gtonline.git
```

### 2. Entrar na pasta do projeto

``` bash
cd digital-store-gtonline
```

### 3. Instalar as dependências

``` bash
npm install
```

### 4. Executar em ambiente de desenvolvimento

``` bash
npm start
```

Após iniciar, a aplicação poderá ser acessada pelo endereço indicado
pelo React no terminal, normalmente:

``` text
http://localhost:3000
```

## Scripts disponíveis

### Iniciar o projeto

``` bash
npm start
```

Executa a aplicação em modo de desenvolvimento.

### Gerar a versão de produção

``` bash
npm run build
```

Cria a versão otimizada da aplicação para produção.

### Executar os testes

``` bash
npm test
```

Executa os testes configurados no projeto.

## Objetivo acadêmico

Este projeto foi desenvolvido como atividade final de **Front-end do
Geração Tech Online 4.0**, seguindo os requisitos propostos para a
construção de uma aplicação React baseada na documentação da Digital
Store e na referência visual do Figma.

## Autoria

**Pedro Arlindo de Sousa**

Projeto desenvolvido individualmente para o **Geração Tech Online 4.0**.

## Repositório

https://github.com/peterarlindo/digital-store-gtonline
