import type { BoardSizeOption, GameSettings } from '../../app/game-settings';
import { getThemeModifierClass } from '../../app/theme-assets';
import playerLabelIconRaw from '../../../puplic/designs/theme_1/label.svg?raw';
import exitButtonSprite from '../../../puplic/icons/icons_1/exitgame1.svg';

export function createGameTemplate(settings: GameSettings): string {
  const gameThemeClassName = getThemeModifierClass(settings.theme);
  const boardSize = settings.boardSize ?? '16';
  const boardSizeClassName = readBoardSizeClassName(boardSize);
  const boardCards = createBoardCards(boardSize);
  const isCodeVibesTheme = settings.theme !== 'foods';
  const playerMarkerClassName = settings.player === 'orange'
    ? ' is-orange'
    : ' is-blue';

  return `
    <main class="game-screen ${gameThemeClassName} ${boardSizeClassName}" aria-labelledby="game-title">
      <h1 id="game-title" class="game-screen__sr-only">Game</h1>
      <div class="game-screen__canvas">
        <section class="game-screen__board-area" aria-label="Game board">
          <div
            class="game-screen__board-grid"
            id="game-board"
            data-board-size="${boardSize}"
          >
            ${boardCards}
          </div>
        </section>
        ${isCodeVibesTheme
    ? createCodeVibesHud(playerMarkerClassName)
    : createFallbackHud()}
      </div>
    </main>
  `;
}

function createCodeVibesHud(playerMarkerClassName: string): string {
  const playerLabelIcon = createPlayerLabelIconMarkup();

  return `
    <div class="game-screen__hud">
      <div class="game-screen__scoreboard" aria-label="Scoreboard">
        <span class="game-screen__score game-screen__score--blue">
          <span class="game-screen__score-icon" aria-hidden="true"></span>
          <span>Blue</span>
          <span class="game-screen__score-value">0</span>
        </span>
        <span class="game-screen__score game-screen__score--orange">
          <span class="game-screen__score-icon" aria-hidden="true"></span>
          <span>Orange</span>
          <span class="game-screen__score-value">0</span>
        </span>
      </div>

      <span
        class="game-screen__current-player-marker${playerMarkerClassName}"
        aria-hidden="true"
      >
        ${playerLabelIcon}
      </span>

      <button
        id="game-exit-button"
        class="game-screen__exit-button"
        type="button"
        aria-label="Exit game"
      >
        <img
          class="game-screen__exit-button-image"
          src="${exitButtonSprite}"
          alt=""
          aria-hidden="true"
        />
      </button>
    </div>
  `;
}

function createPlayerLabelIconMarkup(): string {
  return playerLabelIconRaw
    .replace(/fill="#2BB1FF"/gi, 'fill="currentColor"')
    .trim();
}

function createFallbackHud(): string {
  return `
    <div class="game-screen__hud">
      <button
        id="game-exit-button"
        class="game-screen__exit-fallback"
        type="button"
      >
        Exit game
      </button>
    </div>
  `;
}

function createBoardCards(boardSize: BoardSizeOption): string {
  const cardCount = Number.parseInt(boardSize, 10);
  return Array.from({ length: cardCount }, (_, index) => {
    return `
      <button class="game-card" type="button" data-card-index="${index}">
        <span class="game-card__inner">
          <span class="game-card__face game-card__face--front" aria-hidden="true">
            <span class="game-card__code-icon">&lt;/&gt;</span>
          </span>
          <span class="game-card__face game-card__face--back" aria-hidden="true"></span>
        </span>
      </button>
    `;
  }).join('');
}

function readBoardSizeClassName(boardSize: BoardSizeOption): string {
  if (boardSize === '24') {
    return 'game-screen--board-24';
  }

  if (boardSize === '36') {
    return 'game-screen--board-36';
  }

  return 'game-screen--board-16';
}
