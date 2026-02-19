import type { BoardSizeOption, ThemeOption } from './game-settings';
import board16 from '../../puplic/designs/theme_1/Code vibes theme_16.svg';
import board24 from '../../puplic/designs/theme_1/Code vibes theme_24.svg';
import board36 from '../../puplic/designs/theme_1/Code vibes theme_36.svg';
import foodBoard16 from '../../puplic/designs/theme2/Food_theme_16.svg';
import foodBoard24 from '../../puplic/designs/theme2/Food_theme_24.svg';
import foodBoard36 from '../../puplic/designs/theme2/Food_theme_36.svg';

interface ThemeAssets {
  boardImages: Record<BoardSizeOption, string>;
  cssModifierClass: string;
}

const DEFAULT_THEME: ThemeOption = 'code-vibes';
const DEFAULT_BOARD_SIZE: BoardSizeOption = '16';

const THEME_ASSETS: Record<ThemeOption, ThemeAssets> = {
  'code-vibes': {
    boardImages: {
      '16': board16,
      '24': board24,
      '36': board36,
    },
    cssModifierClass: 'game-screen--code-vibes',
  },
  foods: {
    boardImages: {
      '16': foodBoard16,
      '24': foodBoard24,
      '36': foodBoard36,
    },
    cssModifierClass: 'game-screen--foods',
  },
};

export function resolveTheme(theme: ThemeOption | null): ThemeOption {
  return theme ?? DEFAULT_THEME;
}

export function resolveBoardSize(
  boardSize: BoardSizeOption | null,
): BoardSizeOption {
  return boardSize ?? DEFAULT_BOARD_SIZE;
}

export function getThemeModifierClass(theme: ThemeOption | null): string {
  return THEME_ASSETS[resolveTheme(theme)].cssModifierClass;
}

export function getBoardImage(
  theme: ThemeOption | null,
  boardSize: BoardSizeOption | null,
): string {
  const selectedTheme = resolveTheme(theme);
  const selectedBoardSize = resolveBoardSize(boardSize);

  return THEME_ASSETS[selectedTheme].boardImages[selectedBoardSize];
}
