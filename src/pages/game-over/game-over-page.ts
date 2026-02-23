import { getGameResult } from '../../app/game-result';
import { createGameOverTemplate } from './game-over-template';

export function mountGameOverPage(target: HTMLElement): void {
  const gameResult = getGameResult();
  if (!gameResult) {
    window.location.hash = '#game';
    return;
  }

  target.innerHTML = createGameOverTemplate(gameResult);
}
