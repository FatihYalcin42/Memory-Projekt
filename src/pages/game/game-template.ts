import type { GameSettings } from '../../app/game-settings';
import { getBoardImage, getThemeModifierClass } from '../../app/theme-assets';
import playerLabelIcon from '../../../puplic/designs/theme_1/label.svg';
import exitButtonSprite from '../../../puplic/icons/icons_1/exit-game-button.svg';

export function createGameTemplate(settings: GameSettings): string {
  const gameThemeClassName = getThemeModifierClass(settings.theme);
  const boardSizeClassName = readBoardSizeClassName(settings);
  const boardImage = getBoardImage(settings.theme, settings.boardSize);
  const isCodeVibesTheme = settings.theme !== 'foods';
  const playerMarkerClassName = settings.player === 'orange'
    ? ' is-orange'
    : ' is-blue';

  return `
    <main class="game-screen ${gameThemeClassName} ${boardSizeClassName}" aria-labelledby="game-title">
      <h1 id="game-title" class="game-screen__sr-only">Game</h1>
      <div class="game-screen__canvas">
        <img
          class="game-screen__board"
          src="${boardImage}"
          alt="Memory board"
        />
        ${isCodeVibesTheme
    ? createCodeVibesHud(playerMarkerClassName)
    : createFallbackHud()}
      </div>
    </main>
  `;
}

function createCodeVibesHud(playerMarkerClassName: string): string {
  return `
    <div class="game-screen__hud">
      <span
        class="game-screen__current-player-marker${playerMarkerClassName}"
        style="--game-player-marker-image: url('${playerLabelIcon}')"
        aria-hidden="true"
      ></span>

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

function readBoardSizeClassName(settings: GameSettings): string {
  if (settings.boardSize === '24') {
    return 'game-screen--board-24';
  }

  if (settings.boardSize === '36') {
    return 'game-screen--board-36';
  }

  return 'game-screen--board-16';
}
