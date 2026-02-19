import { createHomeTemplate } from './home-template';

const PLAY_BUTTON_SELECTOR = '#play-button';

export function mountHomePage(target: HTMLElement): void {
  target.innerHTML = createHomeTemplate();
  bindHomeEvents(target);
}

function bindHomeEvents(target: HTMLElement): void {
  const playButtonRef = target.querySelector<HTMLButtonElement>(PLAY_BUTTON_SELECTOR);
  if (!playButtonRef) {
    return;
  }

  playButtonRef.addEventListener('click', openSettingsScreen);
}

function openSettingsScreen(): void {
  window.location.hash = '#settings';
}
