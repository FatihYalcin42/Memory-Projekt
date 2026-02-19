import {
  getGameSettings,
  hasCompleteSettings,
  isBoardSizeOption,
  isPlayerOption,
  isThemeOption,
  setBoardSize,
  setGameTheme,
  setPlayer,
} from '../../app/game-settings';
import { createSettingsTemplate } from './settings-template';

const OPTION_SELECTOR = '.settings-option';
const START_BUTTON_SELECTOR = '#start-game-button';

export function mountSettingsPage(target: HTMLElement): void {
  renderSettingsPage(target);
}

function renderSettingsPage(target: HTMLElement): void {
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
  renderSettingsPage(target);
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
