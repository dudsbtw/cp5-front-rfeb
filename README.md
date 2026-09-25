# Melodia — landing page

O **Melodia** é um conceito de app para descobrir música, criado para o Check-Point 05 de Front-end Design (Engenharia de Software, FIAP). Esta landing page apresenta a proposta e permite ouvir uma faixa de demonstração.

## O que a página mostra

- Um player com áudio local, progresso e estado de reprodução.
- O hero com o título e a chamada para ação definidos no enunciado.
- Os quatro benefícios do app, recursos em seções separadas e depoimentos ilustrativos com fotos.
- Um formulário **demonstrativo** que valida nome, e-mail e leitura da política no navegador. Ele não envia nem armazena dados.
- Uma página de [Política de Privacidade](privacidade.html) coerente com o funcionamento do protótipo.
- Um rodapé com contato e redes sociais ilustrativos, identificados como tal.

Os recursos descritos são parte do conceito do produto; não há um app funcional conectado a esta página.

## Direção visual

A interface usa azul elétrico, laranja e tipografia condensada para lembrar capas e materiais gráficos de música. O player é o foco da primeira tela. As seções seguintes usam linhas, hierarquia tipográfica e uma composição assimétrica em vez de grades de cards idênticos. A página tem layout responsivo, foco visível para teclado e suporte a movimento reduzido.

## Tecnologias

- HTML5 semântico
- Tailwind CSS via CDN para layout, cores, tipografia, responsividade e estados visuais
- Font Awesome 6 para os ícones pedidos no enunciado
- Google Fonts: Barlow Condensed e DM Sans
- JavaScript para menu móvel, player e validação do formulário
- SVG local, MP3 de demonstração e WAV de reserva

## Arquivos

```text
index.html                 Página principal
privacidade.html           Política de Privacidade
js/script.js               Interações
assets/img/                Arte do player e favicon
music/                     Faixa MP3 de demonstração
assets/audio/demo.wav      Áudio de reserva
docs/EXPLICACAO.md         Guia do código
```

## Como abrir

Abra a pasta inteira e carregue `index.html` no navegador. O áudio e as imagens usam caminhos relativos. É necessária conexão com a internet para carregar as fontes e o Tailwind CSS.

[Versão publicada no GitHub Pages](https://dudsbtw.github.io/cp5-front-rfeb/)

## Créditos

- Faixa de demonstração: “Lofi Soul”, Zephira Music (arquivo incluído na pasta `music/`).
- Áudio de reserva: melodia simples produzida pelo grupo com base em uma cantiga de domínio público.
- Arte vetorial do player: produzida para este projeto.
- Fotos dos depoimentos ilustrativos: [Random User Generator](https://randomuser.me/). Os personagens e relatos são fictícios.

## Integrantes

| Nome | RM |
|---|---|
| Eduardo Felix Frois Silva | 574103 |
| Gabriel Henrique Ongarelli Reis | 572636 |
| Matheus de Amorim Brito | 572435 |
| Thiago Gomes Nascimento | 569436 |
| Vinicius Scalone Ramires | 573783 |
