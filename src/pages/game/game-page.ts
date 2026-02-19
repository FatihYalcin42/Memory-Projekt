import { getGameSettings } from '../../app/game-settings';
import { createGameTemplate } from './game-template';

const BACK_BUTTON_SELECTOR = '#game-back-button';

export function mountGamePage(target: HTMLElement): void {
  target.innerHTML = createGameTemplate(getGameSettings());
  bindGameEvents(target);
}

function bindGameEvents(target: HTMLElement): void {
  const backButton = target.querySelector<HTMLButtonElement>(BACK_BUTTON_SELECTOR);
  if (!backButton) {
    return;
  }

  backButton.addEventListener('click', () => {
    window.location.hash = '#settings';
  });
}
