import type { GameResult } from '../../app/game-result';
import confettiAsset from '../../../puplic/designs/theme_1/Confetti.svg?url';
import playerLabelIconRaw from '../../../puplic/designs/theme_1/label.svg?raw';

export function createGameOverTemplate(result: GameResult): string {
  const playerLabelIcon = createPlayerLabelIconMarkup();
  const winner = getWinnerPresentation(result);

  return `
    <main class="game-over-screen" aria-labelledby="game-over-title">
      <img
        class="game-over-screen__confetti"
        src="${confettiAsset}"
        alt=""
        aria-hidden="true"
      />

      <div class="game-over-screen__content">
        <h1 id="game-over-title" class="game-over-screen__sr-only">Game over</h1>

        <div class="game-over-screen__winner" aria-live="polite">
          <p class="game-over-screen__winner-prefix">the winner is</p>
          <p class="game-over-screen__winner-player ${winner.className}">
            ${winner.label}
          </p>
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

interface WinnerPresentation {
  className: string;
  label: string;
}

function getWinnerPresentation(result: GameResult): WinnerPresentation {
  if (result.blueScore > result.orangeScore) {
    return {
      className: 'game-over-screen__winner-player--blue',
      label: 'BLUE PLAYER',
    };
  }

  if (result.orangeScore > result.blueScore) {
    return {
      className: 'game-over-screen__winner-player--orange',
      label: 'ORANGE PLAYER',
    };
  }

  return {
    className: 'game-over-screen__winner-player--draw',
    label: 'DRAW',
  };
}
