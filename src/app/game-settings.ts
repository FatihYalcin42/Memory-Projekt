export type ThemeOption = 'code-vibes' | 'gaming' | 'da-projects' | 'foods';
export type PlayerOption = 'blue' | 'orange';
export type BoardSizeOption = '16' | '24' | '36';

export interface SettingsChoice<T extends string> {
  label: string;
  value: T;
}

export interface GameSettings {
  boardSize: BoardSizeOption | null;
  player: PlayerOption | null;
  theme: ThemeOption | null;
}

export const THEME_CHOICES: SettingsChoice<ThemeOption>[] = [
  { value: 'code-vibes', label: 'Code vibes theme' },
  { value: 'gaming', label: 'Gaming theme' },
  { value: 'da-projects', label: 'DA Projects theme' },
  { value: 'foods', label: 'Foods theme' },
];

export const PLAYER_CHOICES: SettingsChoice<PlayerOption>[] = [
  { value: 'blue', label: 'Blue' },
  { value: 'orange', label: 'Orange' },
];

export const BOARD_SIZE_CHOICES: SettingsChoice<BoardSizeOption>[] = [
  { value: '16', label: '16 cards' },
  { value: '24', label: '24 cards' },
  { value: '36', label: '36 cards' },
];

let currentSettings: GameSettings = {
  boardSize: null,
  player: null,
  theme: null,
};

export function getGameSettings(): GameSettings {
  return { ...currentSettings };
}

export function setGameTheme(theme: ThemeOption): void {
  currentSettings = { ...currentSettings, theme };
}

export function setPlayer(player: PlayerOption): void {
  currentSettings = { ...currentSettings, player };
}

export function setBoardSize(boardSize: BoardSizeOption): void {
  currentSettings = { ...currentSettings, boardSize };
}

export function hasCompleteSettings(): boolean {
  return Boolean(
    currentSettings.theme &&
      currentSettings.player &&
      currentSettings.boardSize,
  );
}

export function isThemeOption(value: string): value is ThemeOption {
  return THEME_CHOICES.some((choice) => choice.value === value);
}

export function isPlayerOption(value: string): value is PlayerOption {
  return PLAYER_CHOICES.some((choice) => choice.value === value);
}

export function isBoardSizeOption(value: string): value is BoardSizeOption {
  return BOARD_SIZE_CHOICES.some((choice) => choice.value === value);
}
