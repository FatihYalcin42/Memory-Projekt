import { getGameSettings } from '../../app/game-settings';
import { createGameTemplate } from './game-template';

const EXIT_BUTTON_SELECTOR = '#game-exit-button';

export function mountGamePage(target: HTMLElement): void {
  target.innerHTML = createGameTemplate(getGameSettings());
  bindGameEvents(target);
}

function bindGameEvents(target: HTMLElement): void {
  const exitButton = target.querySelector<HTMLButtonElement>(EXIT_BUTTON_SELECTOR);
  if (!exitButton) {
    return;
  }

  exitButton.addEventListener('click', () => {
    window.location.hash = '#settings';
  });
}
