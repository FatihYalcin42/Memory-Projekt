import {
  getGameSettings,
  hasCompleteSettings,
  isBoardSizeOption,
  type GameSettings,
  isPlayerOption,
  isThemeOption,
  setBoardSize,
  setGameTheme,
  setPlayer,
} from '../../app/game-settings';
import { createSettingsTemplate } from './settings-template';

const OPTION_SELECTOR = '.settings-option';
const OPTION_LINE_SELECTOR = '.settings-option__line';
const OPTION_MARKER_SELECTOR = '.settings-option__marker';
const FOOTER_SEPARATOR_SELECTOR = '.settings-footer__separator';
const START_BUTTON_SELECTOR = '#start-game-button';
const FOOTER_REFRESH_CLASS = 'is-refreshing';

type SettingsGroup = 'boardSize' | 'player' | 'theme';

export function mountSettingsPage(target: HTMLElement): void {
  target.innerHTML = createSettingsTemplate(getGameSettings());
  bindOptionEvents(target);
  bindStartButton(target);
}

function bindOptionEvents(target: HTMLElement): void {
  const optionButtons = target.querySelectorAll<HTMLButtonElement>(OPTION_SELECTOR);
  optionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      handleOptionSelection(target, button.dataset.group, button.dataset.value);
    });
  });
}

function handleOptionSelection(
  target: HTMLElement,
  group?: string,
  value?: string,
): void {
  if (!group || !value) {
    return;
  }

  applySelection(group, value);
  syncSettingsUi(target, getGameSettings());
}

function applySelection(group: string, value: string): void {
  if (group === 'theme' && isThemeOption(value)) {
    setGameTheme(value);
    return;
  }

  if (group === 'player' && isPlayerOption(value)) {
    setPlayer(value);
    return;
  }

  if (group === 'boardSize' && isBoardSizeOption(value)) {
    setBoardSize(value);
  }
}

function syncSettingsUi(target: HTMLElement, settings: GameSettings): void {
  syncOptions(target, settings);
  syncFooterSummary(target, settings);
  syncStartButtonState(target);
}

function syncOptions(target: HTMLElement, settings: GameSettings): void {
  const optionButtons = target.querySelectorAll<HTMLButtonElement>(OPTION_SELECTOR);

  optionButtons.forEach((button) => {
    const isSelected = isMatchingOption(settings, button.dataset.group, button.dataset.value);
    button.classList.toggle('is-selected', isSelected);

    const lineElement = button.querySelector<HTMLElement>(OPTION_LINE_SELECTOR);
    lineElement?.classList.toggle('is-visible', isSelected);

    const markerElement = button.querySelector<HTMLImageElement>(OPTION_MARKER_SELECTOR);
    if (!markerElement) {
      return;
    }

    const markerSource = isSelected
      ? markerElement.dataset.activeIcon
      : markerElement.dataset.inactiveIcon;

    if (markerSource) {
      markerElement.src = markerSource;
    }
  });
}

function isMatchingOption(
  settings: GameSettings,
  group?: string,
  value?: string,
): boolean {
  if (!group || !value) {
    return false;
  }

  if (group === 'theme') {
    return settings.theme === value;
  }

  if (group === 'player') {
    return settings.player === value;
  }

  if (group === 'boardSize') {
    return settings.boardSize === value;
  }

  return false;
}

function syncFooterSummary(target: HTMLElement, settings: GameSettings): void {
  updateFooterItem(
    target,
    'theme',
    settings.theme !== null,
    formatThemeSummary(settings.theme),
  );
  updateFooterItem(
    target,
    'player',
    settings.player !== null,
    formatPlayerSummary(settings.player),
  );
  updateFooterItem(
    target,
    'boardSize',
    settings.boardSize !== null,
    formatBoardSummary(settings.boardSize),
  );
}

function updateFooterItem(
  target: HTMLElement,
  group: SettingsGroup,
  isSelected: boolean,
  text: string,
): void {
  const summaryItem = target.querySelector<HTMLElement>(
    `[data-summary-group="${group}"]`,
  );
  if (!summaryItem) {
    return;
  }

  const wasSelected = summaryItem.classList.contains('is-selected');
  summaryItem.classList.toggle('is-selected', isSelected);

  const separator = summaryItem.querySelector<HTMLImageElement>(FOOTER_SEPARATOR_SELECTOR);
  if (separator) {
    const separatorSource = isSelected
      ? separator.dataset.separatorActive
      : separator.dataset.separatorInactive;

    if (separatorSource) {
      separator.src = separatorSource;
    }
  }

  const summaryText = summaryItem.querySelector<HTMLElement>(
    `[data-summary-text="${group}"]`,
  );
  let hasTextChanged = false;
  if (summaryText && summaryText.textContent !== text) {
    summaryText.textContent = text;
    hasTextChanged = true;
  }

  if ((isSelected && !wasSelected) || hasTextChanged) {
    replayFooterAnimation(summaryItem);
  }
}

function replayFooterAnimation(summaryItem: HTMLElement): void {
  summaryItem.classList.remove(FOOTER_REFRESH_CLASS);
  window.requestAnimationFrame(() => {
    summaryItem.classList.add(FOOTER_REFRESH_CLASS);
    window.setTimeout(() => {
      summaryItem.classList.remove(FOOTER_REFRESH_CLASS);
    }, 240);
  });
}

function formatThemeSummary(theme: GameSettings['theme']): string {
  if (!theme) {
    return 'Theme';
  }

  return 'Game theme';
}

function formatPlayerSummary(player: GameSettings['player']): string {
  if (!player) {
    return 'Player';
  }

  if (player === 'orange') {
    return 'Orange Player';
  }

  return 'Blue Player';
}

function formatBoardSummary(boardSize: GameSettings['boardSize']): string {
  if (!boardSize) {
    return 'Board size';
  }

  return `Board-${boardSize} Cards`;
}

function syncStartButtonState(target: HTMLElement): void {
  const startButton = target.querySelector<HTMLButtonElement>(START_BUTTON_SELECTOR);
  if (!startButton) {
    return;
  }

  const isReady = hasCompleteSettings();
  startButton.classList.toggle('is-ready', isReady);
  startButton.disabled = !isReady;
}

function bindStartButton(target: HTMLElement): void {
  const startButton = target.querySelector<HTMLButtonElement>(START_BUTTON_SELECTOR);
  if (!startButton) {
    return;
  }

  startButton.addEventListener('click', () => {
    if (!hasCompleteSettings()) {
      return;
    }

    window.location.hash = '#game';
  });
}
