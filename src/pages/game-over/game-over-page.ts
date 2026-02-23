import { getGameResult } from '../../app/game-result';
import { createGameOverTemplate } from './game-over-template';

const WINNER_REVEAL_DELAY_MS = 2200;
const GAME_OVER_SCREEN_SELECTOR = '[data-game-over-screen]';
const WINNER_VISIBLE_CLASS = 'is-winner-visible';

export function mountGameOverPage(target: HTMLElement): void {
  const gameResult = getGameResult();
  if (!gameResult) {
    window.location.hash = '#game';
    return;
  }

  target.innerHTML = createGameOverTemplate(gameResult);

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
