import type { GameResult } from '../../app/game-result';
import confettiAsset from '../../../puplic/designs/theme_1/Confetti.svg?url';
import playerLabelIconRaw from '../../../puplic/designs/theme_1/label.svg?raw';

export function createGameOverTemplate(result: GameResult): string {
  const playerLabelIcon = createPlayerLabelIconMarkup();
  const winner = getWinnerPresentation(result);
  const scoreSummary = createScoreSummaryMarkup(result, playerLabelIcon);

  return `
    <main
      class="game-over-screen"
      data-game-over-screen
      aria-labelledby="game-over-title"
    >
      <section class="game-over-screen__intro">
        <div class="game-over-screen__banner">
          <h1 id="game-over-title" class="game-over-screen__title">Game over</h1>
        </div>
        <h2 class="game-over-screen__subtitle">Final score</h2>
        ${scoreSummary}
      </section>

      <section class="game-over-screen__winner-page" aria-live="polite">
        <img
          class="game-over-screen__confetti"
          src="${confettiAsset}"
          alt=""
          aria-hidden="true"
        />

        <div class="game-over-screen__winner-content">
          <p class="game-over-screen__winner-prefix">the winner is</p>
          <p class="game-over-screen__winner-player ${winner.className}">
            ${winner.label}
          </p>

          <h2 class="game-over-screen__subtitle">Final score</h2>
          ${scoreSummary}
        </div>
      </section>
    </main>
  `;
}

function createPlayerLabelIconMarkup(): string {
  return playerLabelIconRaw
    .replace(/fill="#2BB1FF"/gi, 'fill="currentColor"')
    .trim();
}

function createScoreSummaryMarkup(result: GameResult, playerLabelIcon: string): string {
  return `
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
  `;
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
