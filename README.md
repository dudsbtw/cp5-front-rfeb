# Melodia — Landing Page

Landing page do **Melodia**, um app de músicas fictício, desenvolvida para o **Check-Point 05** da disciplina de **Front-end Design** (Engenharia de Software — FIAP, 2º semestre).

🔗 **Página publicada:** https://dudsbtw.github.io/cp5-front-rfeb/

## Sobre a aplicação

O Melodia é voltado para amantes de música, jovens e pessoas que buscam novas descobertas musicais. A página apresenta o app com um visual moderno, clean e com cores vibrantes, destacando seus diferenciais:

- Qualidade de som superior
- Criação de playlists personalizadas
- Descoberta de novos artistas
- Interface intuitiva

### Seções da página

| Seção | O que tem |
|---|---|
| **Menu fixo** | Fica transparente no topo e ganha fundo escuro com desfoque ao rolar a página (JavaScript). No celular vira um menu hambúrguer. |
| **Hero** | Título "Melodia: Sua Música, Sua Forma", descrição, botão **Ouvir Agora** (toca uma música de demonstração) e imagem do app. |
| **Apresentação** | Os 4 benefícios principais com ícones do Font Awesome. |
| **Funcionalidades** | 6 cards com as funcionalidades do app. |
| **Depoimentos** | 3 depoimentos com citação e foto de perfil. |
| **Formulário de contato** | Coleta nome e e-mail para campanhas de marketing, com validação em JavaScript. |
| **Rodapé** | Contato, redes sociais e link para a Política de Privacidade. |

## Tecnologias usadas

- **HTML5** — estrutura semântica (`header`, `nav`, `main`, `section`, `article`, `figure`, `footer`)
- **CSS3** — estilos complementares (degradê, animação do equalizador, efeito do menu)
- **Tailwind CSS** (via CDN) — estilização e layout responsivo
- **Font Awesome 6** — ícones
- **Google Fonts** — fonte Poppins
- **JavaScript** — menu fixo com transparência, menu mobile, player de áudio e validação do formulário
- **GitHub Pages** — publicação

## Estrutura de arquivos

```
cp5-front-rfeb/
├── index.html          # Landing page
├── privacidade.html    # Política de privacidade
├── css/
│   └── style.css       # CSS próprio (complementa o Tailwind)
├── js/
│   └── script.js       # Interações da página
├── assets/
│   ├── img/            # Imagem do app e favicon (SVG)
│   └── audio/          # Música de demonstração
└── docs/
    ├── EXPLICACAO.md          # Explicação do código
    └── apresentacao-cp5.pptx  # Slides da apresentação
```

## Como rodar

Não precisa instalar nada. Basta abrir o arquivo `index.html` no navegador (é preciso internet para carregar o Tailwind, o Font Awesome e a fonte).

## Créditos

- Música de demonstração: melodia simples gerada pelo grupo, baseada em uma cantiga de domínio público (sem direitos autorais).
- Fotos dos depoimentos: [randomuser.me](https://randomuser.me) (pessoas fictícias).

## Integrantes

| Nome | RM |
|---|---|
| Eduardo Felix Frois Silva | 574103 |
| Gabriel Henrique Ongarelli Reis | 572636 |
| Matheus de Amorim Brito | 572435 |
| Thiago Gomes Nascimento | 569436 |
| Vinicius Scalone Ramires | 573783 |
