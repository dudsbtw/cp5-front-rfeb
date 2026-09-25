const menuButton = document.getElementById('btn-menu');
const mobileMenu = document.getElementById('menu-mobile');
const header = document.getElementById('menu');

function syncHeader() {
  const solid = window.scrollY > 40 || !mobileMenu.classList.contains('hidden');
  header.classList.toggle('bg-white', solid);
  header.classList.toggle('text-ink', solid);
  header.classList.toggle('border-ink/15', solid);
  header.classList.toggle('bg-transparent', !solid);
  header.classList.toggle('text-white', !solid);
  header.classList.toggle('border-transparent', !solid);
}

window.addEventListener('scroll', syncHeader, { passive: true });
syncHeader();

function setMenuOpen(open) {
  mobileMenu.classList.toggle('hidden', !open);
  mobileMenu.classList.toggle('flex', open);
  menuButton.classList.toggle('bg-accent', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  syncHeader();
}

menuButton.addEventListener('click', () => setMenuOpen(mobileMenu.classList.contains('hidden')));
mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false));
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
    setMenuOpen(false);
    menuButton.focus();
  }
});
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768 && !mobileMenu.classList.contains('hidden')) setMenuOpen(false);
});

const audio = document.getElementById('audio-demo');
const playButton = document.getElementById('btn-ouvir');
const playText = document.getElementById('texto-ouvir');
const playIcon = document.querySelector('#icone-ouvir i');
const equalizer = document.getElementById('equalizador');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const audioStatus = document.getElementById('estado-audio');
const currentTime = document.getElementById('tempo-atual');
const totalTime = document.getElementById('tempo-total');
const progress = document.getElementById('progresso');

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return '0:00';
  const whole = Math.floor(seconds);
  return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, '0')}`;
}

function syncProgress() {
  currentTime.textContent = formatTime(audio.currentTime);
  totalTime.textContent = formatTime(audio.duration);
  progress.style.width = audio.duration ? `${(audio.currentTime / audio.duration) * 100}%` : '0%';
}

function syncPlayback() {
  const playing = !audio.paused && !audio.ended;
  playButton.setAttribute('aria-pressed', String(playing));
  playText.textContent = playing ? 'Pausar música' : 'Ouvir Agora';
  playIcon.classList.toggle('fa-play', !playing);
  playIcon.classList.toggle('fa-pause', playing);
  equalizer.querySelectorAll('span').forEach((bar) => {
    bar.classList.toggle('animate-soundbar', playing && !reducedMotion.matches);
  });
}

reducedMotion.addEventListener('change', syncPlayback);

playButton.addEventListener('click', async () => {
  if (!audio.paused) {
    audio.pause();
    audioStatus.textContent = 'Amostra pausada.';
    return;
  }
  try {
    await audio.play();
    audioStatus.textContent = 'Reproduzindo amostra.';
  } catch {
    audioStatus.textContent = 'Não foi possível reproduzir a amostra. Tente novamente.';
  }
});

audio.addEventListener('play', syncPlayback);
audio.addEventListener('pause', syncPlayback);
audio.addEventListener('ended', () => {
  syncPlayback();
  audioStatus.textContent = 'A amostra terminou. Você pode ouvi-la novamente.';
});
audio.addEventListener('timeupdate', syncProgress);
audio.addEventListener('durationchange', syncProgress);
audio.addEventListener('error', () => {
  audioStatus.textContent = 'O arquivo de áudio não carregou. Recarregue a página e tente novamente.';
});
syncPlayback();
syncProgress();

const form = document.getElementById('form-contato');
const formMessage = document.getElementById('mensagem-form');
const nameInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const consentInput = document.getElementById('aceite');

function showFormMessage(message, success, field) {
  formMessage.textContent = message;
  formMessage.hidden = false;
  formMessage.className = `text-sm font-semibold lg:col-span-2 ${success ? 'text-green-800' : 'text-red-700'}`;
  if (field) {
    field.setAttribute('aria-invalid', 'true');
    field.classList.add('ring-2', 'ring-red-700');
    field.focus();
  }
}

[nameInput, emailInput, consentInput].forEach((field) => {
  const clearError = () => {
    field.removeAttribute('aria-invalid');
    field.classList.remove('ring-2', 'ring-red-700');
  };
  field.addEventListener('input', clearError);
  field.addEventListener('change', clearError);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  [nameInput, emailInput, consentInput].forEach((field) => {
    field.removeAttribute('aria-invalid');
    field.classList.remove('ring-2', 'ring-red-700');
  });

  if (!nameInput.value.trim()) {
    showFormMessage('Digite seu nome para testar o cadastro.', false, nameInput);
    return;
  }
  if (!emailInput.value.trim()) {
    showFormMessage('Digite seu e-mail para testar o cadastro.', false, emailInput);
    return;
  }
  if (!emailInput.checkValidity()) {
    showFormMessage('Confira o formato do e-mail, por exemplo, nome@site.com.', false, emailInput);
    return;
  }
  if (!consentInput.checked) {
    showFormMessage('Marque que leu a política e entendeu que esta é uma demonstração.', false, consentInput);
    return;
  }

  showFormMessage('Campos validados. Nenhum dado foi enviado ou salvo.', true);
  form.reset();
});

document.getElementById('ano').textContent = new Date().getFullYear();
