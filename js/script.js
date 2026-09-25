// ===== Menu fixo com efeito de transparência =====
// No topo da página o menu fica transparente.
// Quando o usuário rola, adicionamos a classe "menu-rolado" (fundo escuro com desfoque).
const menu = document.getElementById('menu');

function atualizarMenu() {
  menu.classList.toggle('menu-rolado', window.scrollY > 50);
}

window.addEventListener('scroll', atualizarMenu);
atualizarMenu();

// ===== Menu mobile (abrir e fechar) =====
const btnMenu = document.getElementById('btn-menu');
const menuMobile = document.getElementById('menu-mobile');

// A mesma função abre e fecha o menu.
// classList.toggle devolve true se a classe "hidden" foi adicionada (menu fechado).
function alternarMenu() {
  const aberto = !menuMobile.classList.toggle('hidden');
  btnMenu.setAttribute('aria-expanded', aberto);
  btnMenu.innerHTML = aberto ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';

  // Com o menu aberto o fundo do cabeçalho precisa ficar escuro
  menu.classList.toggle('bg-slate-950', aberto);
}

btnMenu.addEventListener('click', alternarMenu);

// Fecha o menu ao clicar em um link
menuMobile.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', alternarMenu);
});

// ===== Botão "Ouvir Agora" (tocar / pausar a música de demonstração) =====
const btnOuvir = document.getElementById('btn-ouvir');
const audio = document.getElementById('audio-demo');
const iconeOuvir = document.getElementById('icone-ouvir');
const textoOuvir = document.getElementById('texto-ouvir');
const equalizador = document.getElementById('equalizador');

function mostrarTocando(tocando) {
  iconeOuvir.className = tocando ? 'fa-solid fa-pause' : 'fa-solid fa-play';
  textoOuvir.textContent = tocando ? 'Pausar' : 'Ouvir Agora';
  equalizador.classList.toggle('hidden', !tocando);
}

btnOuvir.addEventListener('click', function () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

// Quando a música termina, o navegador também dispara o evento "pause"
audio.addEventListener('play', function () { mostrarTocando(true); });
audio.addEventListener('pause', function () { mostrarTocando(false); });

// ===== Formulário de contato (validação simples) =====
const form = document.getElementById('form-contato');
const mensagem = document.getElementById('mensagem-form');

function mostrarMensagem(texto, sucesso) {
  mensagem.textContent = texto;
  mensagem.classList.remove('hidden', 'text-red-400', 'text-green-400');
  mensagem.classList.add(sucesso ? 'text-green-400' : 'text-red-400');
}

form.addEventListener('submit', function (evento) {
  // Impede a página de recarregar
  evento.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const aceite = document.getElementById('aceite').checked;
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (nome === '') {
    mostrarMensagem('Por favor, preencha o seu nome.', false);
    return;
  }

  if (!emailValido) {
    mostrarMensagem('Digite um e-mail válido.', false);
    return;
  }

  if (!aceite) {
    mostrarMensagem('Você precisa aceitar receber nossos e-mails.', false);
    return;
  }

  mostrarMensagem('Obrigado, ' + nome + '! Você vai receber nossas novidades em ' + email + '.', true);
  form.reset();
});

// ===== Ano atual no rodapé =====
document.getElementById('ano').textContent = new Date().getFullYear();
