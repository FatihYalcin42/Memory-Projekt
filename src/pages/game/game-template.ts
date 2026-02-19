import type {
  BoardSizeOption,
  GameSettings,
  PlayerOption,
  ThemeOption,
} from '../../app/game-settings';
import board16 from '../../../puplic/designs/theme_1/Code vibes theme_16.svg';
import board24 from '../../../puplic/designs/theme_1/Code vibes theme_24.svg';
import board36 from '../../../puplic/designs/theme_1/Code vibes theme_36.svg';

const BOARD_IMAGES: Record<BoardSizeOption, string> = {
  '16': board16,
  '24': board24,
  '36': board36,
};

export function createGameTemplate(settings: GameSettings): string {
  return `
    <main class="game-screen" aria-labelledby="game-title">
      <div class="game-screen__canvas">
        <img
          class="game-screen__board"
          src="${readBoardImage(settings.boardSize)}"
          alt="Memory board"
        />

        <header class="game-screen__overlay">
          <h1 id="game-title">Game</h1>
          <p>${readMetaText(settings.theme, settings.player, settings.boardSize)}</p>
          <button id="game-back-button" type="button">Settings</button>
        </header>
      </div>
    </main>
  `;
}

function readBoardImage(boardSize: BoardSizeOption | null): string {
  if (!boardSize) {
    return board16;
  }

  return BOARD_IMAGES[boardSize];
}

function readMetaText(
  theme: ThemeOption | null,
  player: PlayerOption | null,
  boardSize: BoardSizeOption | null,
): string {
  const themeLabel = theme ? theme : '-';
  const playerLabel = player ? player : '-';
  const boardLabel = boardSize ? `${boardSize} cards` : '-';
  return `Theme: ${themeLabel} | Player: ${playerLabel} | Board: ${boardLabel}`;
}
