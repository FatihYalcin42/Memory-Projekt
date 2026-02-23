import type { GameResult } from '../../app/game-result';
import type { ThemeOption } from '../../app/game-settings';
import { resolveTheme } from '../../app/theme-assets';
import confettiAsset from '../../../puplic/designs/theme_1/Confetti.svg?url';
import codeVibesPlayerLabelIconRaw from '../../../puplic/designs/theme_1/label.svg?raw';
import foodsPlayerLabelIconRaw from '../../../puplic/designs/theme2/Frame 614.svg?raw';
import backToGameButtonSprite from '../../../puplic/designs/theme_1/back-to-game-button.svg';
import foodsHomeButtonSprite from '../../../puplic/designs/theme2/home-button.svg';
import foodsWinnerBluePlayerSprite from '../../../puplic/designs/theme2/player-blue.svg';
import foodsWinnerOrangePlayerSprite from '../../../puplic/designs/theme2/player-orange.svg';

/**
 * Builds the game-over and winner markup for the selected theme.
 *
 * @param result Final score result.
 * @param theme Selected game theme.
 * @returns Game-over screen HTML string.
 */
export function createGameOverTemplate(
  result: GameResult,
  theme: ThemeOption | null,
): string {
  const resolvedTheme = resolveTheme(theme);
  const isFoodsTheme = resolvedTheme === 'foods';
  const themeClassName = isFoodsTheme
    ? 'game-over-screen--foods'
    : 'game-over-screen--code-vibes';
  const playerLabelIcon = isFoodsTheme
    ? createFoodsPlayerLabelIconMarkup()
    : createCodeVibesPlayerLabelIconMarkup();
  const winner = getWinnerPresentation(result);
  const scoreSummary = createScoreSummaryMarkup(
    result,
    playerLabelIcon,
    resolvedTheme,
  );
  const winnerContentMarkup = isFoodsTheme
    ? createFoodsWinnerContentMarkup(winner)
    : createCodeVibesWinnerContentMarkup(winner, scoreSummary);
  const backHomeButtonSprite = isFoodsTheme
    ? foodsHomeButtonSprite
    : backToGameButtonSprite;
  const backHomeButtonImageClassName = isFoodsTheme
    ? 'game-over-screen__back-home-button-image game-over-screen__back-home-button-image--foods'
    : 'game-over-screen__back-home-button-image';
  const confettiMarkup = isFoodsTheme
    ? ''
    : `
        <img
          class="game-over-screen__confetti"
          src="${confettiAsset}"
          alt=""
          aria-hidden="true"
        />
      `;

  return `
    <main
      class="game-over-screen ${themeClassName}"
      data-game-over-screen
      aria-labelledby="game-over-title"
    >
      <section class="game-over-screen__intro">
        <div class="game-over-screen__banner">
          <h1 id="game-over-title" class="game-over-screen__title">Game Over</h1>
        </div>
        <h2 class="game-over-screen__subtitle">Final score</h2>
        ${scoreSummary}
      </section>

      <section class="game-over-screen__winner-page" aria-live="polite">
        ${confettiMarkup}

        <div class="game-over-screen__winner-content">
          ${winnerContentMarkup}

          <button
            type="button"
            class="game-over-screen__back-home-button"
            data-back-home-button
            aria-label="Back to home"
          >
            <img
              class="${backHomeButtonImageClassName}"
              src="${backHomeButtonSprite}"
              alt=""
              aria-hidden="true"
            />
          </button>
        </div>
      </section>
    </main>
  `;
}

function createCodeVibesWinnerContentMarkup(
  winner: WinnerPresentation,
  scoreSummary: string,
): string {
  return `
    ${winner.isDraw ? '' : '<p class="game-over-screen__winner-prefix">the winner is</p>'}
    <p class="game-over-screen__winner-player ${winner.className}">
      ${winner.label}
    </p>

    <h2 class="game-over-screen__subtitle">Final score</h2>
    ${scoreSummary}
  `;
}

function createFoodsWinnerContentMarkup(winner: WinnerPresentation): string {
  const playerIconMarkup = createFoodsWinnerPlayerIconMarkup(winner);

  return `
    ${winner.isDraw ? '' : '<p class="game-over-screen__winner-prefix">The winner is</p>'}
    <p class="game-over-screen__winner-player ${winner.className}">
      ${winner.label}
    </p>
    ${playerIconMarkup}
  `;
}

function createFoodsWinnerPlayerIconMarkup(winner: WinnerPresentation): string {
  if (winner.isDraw) {
    return '';
  }

  const iconSource = winner.className === 'game-over-screen__winner-player--orange'
    ? foodsWinnerOrangePlayerSprite
    : foodsWinnerBluePlayerSprite;
  const iconAlt = winner.className === 'game-over-screen__winner-player--orange'
    ? 'Orange player icon'
    : 'Blue player icon';

  return `
    <div class="game-over-screen__winner-icon">
      <img
        class="game-over-screen__winner-icon-image"
        src="${iconSource}"
        alt="${iconAlt}"
      />
    </div>
  `;
}

function createCodeVibesPlayerLabelIconMarkup(): string {
  return codeVibesPlayerLabelIconRaw
    .replace(/fill="#2BB1FF"/gi, 'fill="currentColor"')
    .trim();
}

function createFoodsPlayerLabelIconMarkup(): string {
  return foodsPlayerLabelIconRaw
    .replace(/fill="#097FC5"/gi, 'fill="currentColor"')
    .trim();
}

function createScoreSummaryMarkup(
  result: GameResult,
  playerLabelIcon: string,
  theme: ThemeOption,
): string {
  if (theme === 'foods') {
    return `
      <div class="game-over-screen__summary game-over-screen__summary--foods" aria-label="Final score">
        <div class="game-over-screen__foods-score game-over-screen__foods-score--orange">
          <span class="game-over-screen__icon" aria-hidden="true">${playerLabelIcon}</span>
          <span class="game-over-screen__value">${result.orangeScore}</span>
        </div>

        <div class="game-over-screen__foods-score game-over-screen__foods-score--blue">
          <span class="game-over-screen__icon" aria-hidden="true">${playerLabelIcon}</span>
          <span class="game-over-screen__value">${result.blueScore}</span>
        </div>
      </div>
    `;
  }

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
  isDraw: boolean;
  className: string;
  label: string;
}

function getWinnerPresentation(result: GameResult): WinnerPresentation {
  if (result.blueScore > result.orangeScore) {
    return {
      isDraw: false,
      className: 'game-over-screen__winner-player--blue',
      label: 'BLUE PLAYER',
    };
  }

  if (result.orangeScore > result.blueScore) {
    return {
      isDraw: false,
      className: 'game-over-screen__winner-player--orange',
      label: 'ORANGE PLAYER',
    };
  }

  return {
    isDraw: true,
    className: 'game-over-screen__winner-player--draw',
    label: 'DRAW',
  };
}
