# Explicação do código — Landing Page Melodia

Este documento explica como a página foi construída e serve de roteiro para a apresentação do Check-Point 05.

---

## 1. Planejamento

**Paleta de cores** (todas do padrão do Tailwind):

| Uso | Classe Tailwind | Cor |
|---|---|---|
| Fundo principal | `bg-slate-950` | quase preto |
| Fundo das seções alternadas | `bg-slate-900` | azul-escuro |
| Destaque (botões, ícones) | `bg-fuchsia-600`, `text-fuchsia-400` | rosa/roxo vibrante |
| Texto secundário | `text-slate-400` | cinza |

Escolhemos o fundo escuro porque é comum em apps de música (lembra palco / show) e faz o rosa vibrante se destacar.

**Tipografia:** fonte **Poppins** do Google Fonts — moderna, arredondada e fácil de ler.

**Ícones:** Font Awesome 6 (ex.: `fa-headphones`, `fa-list-ul`, `fa-compass`).

**Imagens:** a imagem do app é um SVG feito pelo grupo, então fica leve e nítida em qualquer tela.

---

## 2. Organização dos arquivos

```
index.html        → estrutura da página
css/style.css     → CSS próprio (o que o Tailwind não faz sozinho)
js/script.js      → interações
assets/img/       → imagens
assets/audio/     → música de demonstração
privacidade.html  → política de privacidade (link do rodapé)
```

Separamos **estrutura (HTML)**, **estilo (CSS)** e **comportamento (JS)**, cada um em sua pasta.

---

## 3. Estrutura HTML

Usamos tags **semânticas** do HTML5, que dizem o que cada parte é:

```html
<header id="menu">  ... menu fixo ...           </header>
<main>
  <section id="inicio">          Hero            </section>
  <section id="beneficios">      Apresentação    </section>
  <section id="funcionalidades"> Funcionalidades </section>
  <section id="depoimentos">     Depoimentos     </section>
  <section id="contato">         Formulário      </section>
</main>
<footer> ... rodapé ... </footer>
```

- Cada `section` tem um `id`, que é usado pelos links do menu (`href="#contato"`) para rolar até a seção.
- Os cards de funcionalidades usam `<article>`, e os depoimentos usam `<figure>` + `<blockquote>` (citação) + `<figcaption>` (quem falou).
- Todas as imagens têm `alt` e os botões só com ícone têm `aria-label` (acessibilidade).

---

## 4. Tailwind CSS

O Tailwind foi importado pelo **CDN** e configurado para usar a fonte Poppins:

```html
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: { extend: { fontFamily: { sans: ['Poppins', 'sans-serif'] } } }
  }
</script>
```

Exemplo de classes usadas no botão principal:

```html
<button class="rounded-full bg-fuchsia-600 px-8 py-3 font-semibold
               transition hover:scale-105 hover:bg-fuchsia-500">
```

| Classe | O que faz |
|---|---|
| `rounded-full` | bordas totalmente arredondadas |
| `bg-fuchsia-600` | cor de fundo |
| `px-8 py-3` | espaçamento interno (padding) |
| `transition` | anima as mudanças |
| `hover:scale-105` | aumenta 5% ao passar o mouse |

Os ícones dos benefícios também são estilizados só com Tailwind, com as mesmas classes nos 4 ícones para manter a consistência:

```html
<div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center
            rounded-full bg-fuchsia-600/15 text-2xl text-fuchsia-400">
  <i class="fa-solid fa-headphones"></i>
</div>
```

Outros exemplos: `scroll-smooth` no `<html>` (rolagem suave ao clicar no menu) e `bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent` (texto com degradê no título).

---

## 5. Layout responsivo

O Tailwind é **mobile first**: as classes sem prefixo valem para o celular e os prefixos `sm:` (640px), `md:` (768px) e `lg:` (1024px) valem a partir daquele tamanho.

```html
<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
```

- Celular: 1 coluna
- Tablet: 2 colunas
- Computador: 3 colunas

Outros exemplos:
- Hero: `md:grid-cols-2` → no celular o texto fica em cima da imagem; no computador, lado a lado.
- Menu: `hidden md:flex` → os links só aparecem no computador; no celular aparece o botão hambúrguer (`md:hidden`).
- Textos: `text-4xl md:text-5xl` → título maior em telas grandes.

---

## 6. CSS próprio (`css/style.css`)

Usamos o Tailwind para quase tudo. Ficou em CSS puro só o que o Tailwind não faz de forma simples:

- `scroll-margin-top` → a seção não fica escondida atrás do menu fixo.
- `.menu-rolado` → fundo escuro com `backdrop-filter: blur()` (efeito de vidro), usado pelo JS.
- `.hero-bg` → brilho roxo atrás do hero (`radial-gradient`).
- `.card` → estilo dos cards com efeito de subir no `:hover` (fica em uma classe porque é usado em 9 cards).
- `.equalizador` + `@keyframes pulo` → barrinhas animadas que aparecem enquanto a música toca.

---

## 7. Interações em JavaScript (`js/script.js`)

### 7.1 Menu fixo com transparência

```js
function atualizarMenu() {
  menu.classList.toggle('menu-rolado', window.scrollY > 50);
}
window.addEventListener('scroll', atualizarMenu);
```

O menu tem `position: fixed` (classe `fixed`). No topo ele é transparente. O `classList.toggle(classe, condição)` adiciona a classe quando a condição é verdadeira e remove quando é falsa: se a página rolou mais de 50px, entra a classe `menu-rolado`, que coloca o fundo escuro com desfoque.

### 7.2 Menu mobile

```js
function alternarMenu() {
  const aberto = !menuMobile.classList.toggle('hidden');
  ...
}
btnMenu.addEventListener('click', alternarMenu);
```

Uma única função abre e fecha o menu: ela alterna a classe `hidden` da lista de links e troca o ícone de ☰ para ✕. A mesma função é chamada ao clicar em um link, para o menu fechar.

### 7.3 Botão "Ouvir Agora"

```js
btnOuvir.addEventListener('click', function () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
```

Usa a tag `<audio>` do HTML5. Os eventos `play` e `pause` do áudio atualizam o botão (ícone play/pause) e mostram ou escondem o equalizador animado. Quando a música termina, o navegador também dispara `pause`, então o botão volta sozinho para "Ouvir Agora".

### 7.4 Formulário de contato

```js
form.addEventListener('submit', function (evento) {
  evento.preventDefault(); // não recarrega a página
  ...
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
```

- `preventDefault()` impede o envio padrão (não temos servidor).
- Verifica se o nome foi preenchido, se o e-mail é válido (expressão regular) e se a caixa de aceite foi marcada.
- Mostra uma mensagem vermelha de erro ou verde de sucesso e limpa o formulário com `form.reset()`.

### 7.5 Ano no rodapé

```js
document.getElementById('ano').textContent = new Date().getFullYear();
```

O ano do copyright é atualizado automaticamente.

---

## 8. Decisões de interface

- **Fundo escuro + rosa vibrante:** combina com o público jovem e com o tema de música.
- **Seções com fundo alternado** (`slate-950` / `slate-900`): separa visualmente cada parte sem precisar de linhas.
- **CTA em destaque:** o botão "Ouvir Agora" tem a cor mais forte da página e uma sombra colorida.
- **Poucos elementos por seção:** design clean, com espaçamento consistente (`py-20` em todas as seções).
- **Cards iguais** em funcionalidades e depoimentos: mantém a consistência visual.

---

## 9. Testes

- Testamos a página em larguras de celular (390px), tablet e computador (1280px), sem rolagem horizontal.
- Testamos o menu mobile, o botão de áudio e todos os casos do formulário (campos vazios, e-mail inválido, sem aceite e envio correto).

---

## 10. Deploy

A página está publicada no **GitHub Pages**: *Settings → Pages → Deploy from a branch → `main` / (root)*.

https://dudsbtw.github.io/cp5-front-rfeb/
