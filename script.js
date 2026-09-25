// ===== Menu fixo com efeito de transparência =====
// No topo da página o menu fica transparente.
// Quando o usuário rola, adicionamos a classe "menu-rolado" (fundo escuro com desfoque).
const menu = document.getElementById('menu');

function atualizarMenu() {
  if (window.scrollY > 50) {
    menu.classList.add('menu-rolado');
  } else {
    menu.classList.remove('menu-rolado');
  }
}

window.addEventListener('scroll', atualizarMenu);
atualizarMenu();

// ===== Menu mobile (abrir e fechar) =====
const btnMenu = document.getElementById('btn-menu');
const menuMobile = document.getElementById('menu-mobile');

btnMenu.addEventListener('click', function () {
  menuMobile.classList.toggle('hidden');
  menuMobile.classList.toggle('flex');

  const aberto = !menuMobile.classList.contains('hidden');
  btnMenu.setAttribute('aria-expanded', aberto);
  btnMenu.innerHTML = aberto ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';

  // Com o menu aberto o fundo do cabeçalho precisa ficar escuro
  menu.classList.toggle('bg-slate-950', aberto);
});

// Fecha o menu mobile ao clicar em um link
menuMobile.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    menuMobile.classList.add('hidden');
    menuMobile.classList.remove('flex');
    btnMenu.setAttribute('aria-expanded', false);
    btnMenu.innerHTML = '<i class="fa-solid fa-bars"></i>';
    menu.classList.remove('bg-slate-950');
  });
});

// ===== Botão "Ouvir Agora" (tocar / pausar a música de demonstração) =====
const btnOuvir = document.getElementById('btn-ouvir');
const audio = document.getElementById('audio-demo');
const iconeOuvir = document.getElementById('icone-ouvir');
const textoOuvir = document.getElementById('texto-ouvir');
const equalizador = document.getElementById('equalizador');

function mostrarTocando(tocando) {
  if (tocando) {
    iconeOuvir.className = 'fa-solid fa-pause';
    textoOuvir.textContent = 'Pausar';
    equalizador.classList.remove('hidden');
    equalizador.classList.add('flex');
  } else {
    iconeOuvir.className = 'fa-solid fa-play';
    textoOuvir.textContent = 'Ouvir Agora';
    equalizador.classList.add('hidden');
    equalizador.classList.remove('flex');
  }
}

btnOuvir.addEventListener('click', function () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

audio.addEventListener('play', function () { mostrarTocando(true); });
audio.addEventListener('pause', function () { mostrarTocando(false); });
audio.addEventListener('ended', function () { mostrarTocando(false); });

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
