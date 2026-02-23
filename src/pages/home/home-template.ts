import controllerIcon from '../../../puplic/designs/stadia_controller.svg';
import playButtonIcon from '../../../puplic/designs/play-button.svg';

/**
 * Builds the home page markup.
 *
 * @returns Home screen HTML string.
 */
export function createHomeTemplate(): string {
  return `
    <main class="home-screen" aria-labelledby="home-title">
      <div class="home-screen__canvas">
        ${createHomeContent()}
        ${createPlayButton()}
        ${createController()}
      </div>
    </main>
  `;
}

function createHomeContent(): string {
  return `
    <section class="home-screen__content">
      <p class="home-screen__eyebrow">It's play time.</p>
      <h1 id="home-title" class="home-screen__title">Ready to play?</h1>
    </section>
  `;
}

function createPlayButton(): string {
  return `
    <button
      id="play-button"
      class="home-screen__play-button"
      type="button"
      aria-label="Open settings"
    >
      <img
        class="home-screen__play-button-base"
        src="${playButtonIcon}"
        alt=""
        aria-hidden="true"
      />
      <img
        class="home-screen__play-button-controller"
        src="${playButtonIcon}"
        alt=""
        aria-hidden="true"
      />
    </button>
  `;
}

function createController(): string {
  return `
    <img
      class="home-screen__controller"
      src="${controllerIcon}"
      alt=""
      aria-hidden="true"
    />
  `;
}
