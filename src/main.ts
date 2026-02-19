import './styles/style.scss';
import controllerIcon from '../puplic/designs/stadia_controller.svg';
import playButtonIcon from '../puplic/designs/play-button.svg';

const APP_ROOT = document.getElementById('app');

function init(): void {
  if (!APP_ROOT) {
    return;
  }

  APP_ROOT.innerHTML = renderHomeScreen();
  bindHomeEvents();
}

function renderHomeScreen(): string {
  return `
    <main class="home-screen" aria-labelledby="home-title">
      <div class="home-screen__canvas">
        <section class="home-screen__content">
          <p class="home-screen__eyebrow">It's play time.</p>
          <h1 id="home-title" class="home-screen__title">Ready to play?</h1>
        </section>

        <button
          id="play-button"
          class="home-screen__play-button"
          type="button"
          aria-label="Open settings"
        >
          <img src="${playButtonIcon}" alt="" aria-hidden="true" />
        </button>

        <img
          class="home-screen__controller"
          src="${controllerIcon}"
          alt=""
          aria-hidden="true"
        />
      </div>
    </main>
  `;
}

function bindHomeEvents(): void {
  const playButtonRef = document.getElementById('play-button');
  if (!playButtonRef) {
    return;
  }

  playButtonRef.addEventListener('click', openSettingsScreen);
}

function openSettingsScreen(): void {
  window.location.hash = '#settings';
}

init();
