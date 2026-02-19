import type {
  BoardSizeOption,
  GameSettings,
  PlayerOption,
  ThemeOption,
} from '../../app/game-settings';
import board16 from '../../../puplic/designs/theme_1/Code vibes theme_16.svg';
import board24 from '../../../puplic/designs/theme_1/Code vibes theme_24.svg';
import board36 from '../../../puplic/designs/theme_1/Code vibes theme_36.svg';
import foodBoard16 from '../../../puplic/designs/theme2/Food_theme_16.svg';
import foodBoard24 from '../../../puplic/designs/theme2/Food_theme_24.svg';
import foodBoard36 from '../../../puplic/designs/theme2/Food_theme_36.svg';

const BOARD_IMAGES: Record<ThemeOption, Record<BoardSizeOption, string>> = {
  'code-vibes': {
    '16': board16,
    '24': board24,
    '36': board36,
  },
  foods: {
    '16': foodBoard16,
    '24': foodBoard24,
    '36': foodBoard36,
  },
};

export function createGameTemplate(settings: GameSettings): string {
  return `
    <main class="game-screen" aria-labelledby="game-title">
      <div class="game-screen__canvas">
        <img
          class="game-screen__board"
          src="${readBoardImage(settings.theme, settings.boardSize)}"
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

function readBoardImage(
  theme: ThemeOption | null,
  boardSize: BoardSizeOption | null,
): string {
  const selectedTheme = theme ?? 'code-vibes';
  const selectedBoardSize = boardSize ?? '16';
  return BOARD_IMAGES[selectedTheme][selectedBoardSize];
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
