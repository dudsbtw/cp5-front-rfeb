# Explicação do código — Landing Page Melodia

Este documento serve de roteiro para apresentar o Check-Point 05 de Front-end Design.

## 1. Relação com o enunciado

| Requisito | Implementação |
|---|---|
| Hero com título “Melodia: Sua Música, Sua Forma” e CTA “Ouvir Agora” | `#inicio` em `index.html`; o botão toca o MP3 em `music/` |
| Vídeo ou imagem do aplicativo | Prévia visual do player no hero, com arte SVG local |
| Benefícios com Font Awesome e Tailwind | Quatro itens em `#ideia`; ícones e texto usam classes utilitárias |
| Funcionalidades em cards ou seções | Três recursos em seções separadas por linhas em `#recursos` |
| Depoimentos com citações e fotos | `#depoimentos`, com três relatos e retratos ilustrativos |
| Formulário responsivo com Tailwind | `#form-contato`, com grid responsivo, validação em JavaScript e política |
| Rodapé com contato, redes e privacidade | `<footer>`; dados e links fictícios estão identificados |
| Menu fixo com transparência em JavaScript | `#menu` alterna classes Tailwind após a rolagem |
| Google Fonts, CSS3, JavaScript e GitHub Pages | Barlow Condensed + DM Sans, Tailwind CSS, `js/script.js` e publicação estática |

O app e os depoimentos são fictícios. O formulário valida os campos apenas no navegador. Sem um servidor, não há cadastro ou envio de e-mails; a interface e a política deixam isso claro.

## 2. Planejamento visual

- **Azul elétrico** `#2947CF`: hero e ações principais.
- **Azul claro** `#E8EEFC`: fundo de apoio.
- **Laranja** `#FF7047`: destaque do player e da ação de ouvir.
- **Tinta** `#17213A`: texto e seção de recursos.
- **Branco** `#FFFFFF`: superfície de leitura.

**Barlow Condensed** dá presença aos títulos; **DM Sans** mantém o texto legível. A composição lembra um encarte musical: uma capa no hero, listas separadas por linhas e uma única peça visual dominante. Isso atende ao pedido de cores vibrantes e elementos musicais sem repetir a grade de cards genérica.

## 3. Organização

```text
index.html                 Estrutura da landing page
privacidade.html           Política do formulário demonstrativo
js/script.js               Menu, áudio, formulário e ano
assets/img/                Arte SVG do player e favicon
music/                     Faixa MP3 de demonstração
assets/audio/demo.wav      Áudio WAV de reserva (19,2 segundos)
```

## 4. HTML e Tailwind

O HTML usa `header`, `nav`, `main`, `section`, `article`, `figure`, `blockquote`, `figcaption` e `footer` conforme a função de cada área. Os links do menu usam os `id` das seções.

Os benefícios usam Font Awesome dentro de um padrão Tailwind consistente:

```html
<span class="flex size-11 items-center justify-center bg-brandblue text-lg text-white" aria-hidden="true">
  <i class="fa-solid fa-compass"></i>
</span>
```

O formulário usa `grid grid-cols-1 gap-5 lg:grid-cols-2`. Os campos ficam em uma coluna nas telas menores e em duas colunas no desktop. O botão e a confirmação ocupam a largura inteira.

## 5. Tailwind e responsividade

O objeto `tailwind.config` no HTML define as cores do projeto, as fontes e a animação do equalizador. As classes utilitárias estilizam o hero, o player, as listas, os depoimentos e o formulário. Os modificadores `md:` e `lg:` reorganizam as colunas em telas maiores. `focus-visible:` dá foco visível ao teclado e `motion-reduce:` desliga a rolagem suave; o JavaScript respeita a preferência de movimento reduzido no equalizador.

A navegação usa `fixed`. No topo do hero, o fundo é transparente; depois de 40px de rolagem, o JavaScript alterna `bg-transparent` por `bg-white` e ajusta a cor do texto.

## 6. Interações em JavaScript

### Menu móvel

O botão alterna `hidden` no menu e atualiza `aria-expanded` e o nome acessível. O menu fecha ao escolher um link, pressionar Esc ou aumentar a largura da janela.

### Música

`audio.play()` é chamado após o clique em **Ouvir Agora**. Os eventos `play`, `pause`, `timeupdate`, `durationchange` e `ended` mantêm botão, tempo, barra de progresso e equalizador sincronizados. Se o arquivo falhar, a página mostra uma mensagem clara. O MP3 está na pasta `music/`; o WAV local fica como formato de reserva, portanto a reprodução não depende de streaming.

### Formulário

O evento `submit` usa `preventDefault()` para manter a página aberta. O código verifica nome, formato do e-mail e leitura da política. Ele mostra o erro, marca o campo com `aria-invalid` e leva o foco ao campo que precisa de correção. Após a validação, limpa o formulário e informa que nenhum dado foi enviado ou salvo.

### Ano

O rodapé recebe o ano atual por `new Date().getFullYear()`.

## 7. Como demonstrar

1. Abra a página no celular e no desktop e teste o menu.
2. Clique em **Ouvir Agora**: a música deve tocar e o botão deve mudar para **Pausar música**. Pause e reproduza novamente.
3. Teste o formulário vazio, com e-mail inválido, sem marcar a política e com todos os campos válidos.
4. Abra a Política de Privacidade pelo formulário e pelo rodapé.
5. Confira a página publicada no [GitHub Pages](https://dudsbtw.github.io/cp5-front-rfeb/) depois de enviar as alterações ao repositório.
