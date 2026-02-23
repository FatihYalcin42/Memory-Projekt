import type { GameResult } from '../../app/game-result';
import playerLabelIconRaw from '../../../puplic/designs/theme_1/label.svg?raw';

export function createGameOverTemplate(result: GameResult): string {
  const playerLabelIcon = createPlayerLabelIconMarkup();

  return `
    <main class="game-over-screen" aria-labelledby="game-over-title">
      <div class="game-over-screen__content">
        <div class="game-over-screen__banner">
          <h1 id="game-over-title" class="game-over-screen__title">Game over</h1>
        </div>

        <h2 class="game-over-screen__subtitle">Final score</h2>

        <div class="game-over-screen__summary" aria-label="Final score">
          <div class="game-over-screen__player game-over-screen__player--blue">
            <span class="game-over-screen__icon" aria-hidden="true">${playerLabelIcon}</span>
            <span class="game-over-screen__name">Blue</span>
            <span class="game-over-screen__value">${result.blueScore}</span>
          </div>

          <div class="game-over-screen__player game-over-screen__player--orange">
            <span class="game-over-screen__icon" aria-hidden="true">${playerLabelIcon}</span>
            <span class="game-over-screen__name">Orange</span>
            <span class="game-over-screen__value">${result.orangeScore}</span>
          </div>
        </div>
      </div>
    </main>
  `;
}

function createPlayerLabelIconMarkup(): string {
  return playerLabelIconRaw
    .replace(/fill="#2BB1FF"/gi, 'fill="currentColor"')
    .trim();
}
