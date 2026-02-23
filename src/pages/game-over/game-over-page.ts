import { clearGameResult, getGameResult } from '../../app/game-result';
import { getGameSettings } from '../../app/game-settings';
import { createGameOverTemplate } from './game-over-template';

const WINNER_REVEAL_DELAY_MS = 2200;
const GAME_OVER_SCREEN_SELECTOR = '[data-game-over-screen]';
const BACK_HOME_BUTTON_SELECTOR = '[data-back-home-button]';
const WINNER_VISIBLE_CLASS = 'is-winner-visible';

export function mountGameOverPage(target: HTMLElement): void {
  const gameResult = getGameResult();
  const settings = getGameSettings();
  if (!gameResult) {
    window.location.hash = '#game';
    return;
  }

  target.innerHTML = createGameOverTemplate(gameResult, settings.theme);

  const backHomeButton = target.querySelector<HTMLButtonElement>(BACK_HOME_BUTTON_SELECTOR);
  backHomeButton?.addEventListener('click', () => {
    clearGameResult();
    window.location.hash = '#home';
  });

  const gameOverScreen = target.querySelector<HTMLElement>(GAME_OVER_SCREEN_SELECTOR);
  if (!gameOverScreen) {
    return;
  }

  window.setTimeout(() => {
    if (!target.isConnected || window.location.hash !== '#game-over') {
      return;
    }

    gameOverScreen.classList.add(WINNER_VISIBLE_CLASS);
  }, WINNER_REVEAL_DELAY_MS);
}
