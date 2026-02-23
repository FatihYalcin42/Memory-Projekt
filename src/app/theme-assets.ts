import type { ThemeOption } from './game-settings';

interface ThemeAssets {
  cssModifierClass: string;
}

const DEFAULT_THEME: ThemeOption = 'code-vibes';

const THEME_ASSETS: Record<ThemeOption, ThemeAssets> = {
  'code-vibes': {
    cssModifierClass: 'game-screen--code-vibes',
  },
  foods: {
    cssModifierClass: 'game-screen--foods',
  },
};

export function resolveTheme(theme: ThemeOption | null): ThemeOption {
  return theme ?? DEFAULT_THEME;
}

export function getThemeModifierClass(theme: ThemeOption | null): string {
  return THEME_ASSETS[resolveTheme(theme)].cssModifierClass;
}
