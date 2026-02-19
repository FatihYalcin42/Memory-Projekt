import type {
  GameSettings,
  SettingsChoice,
} from '../../app/game-settings';
import {
  BOARD_SIZE_CHOICES,
  PLAYER_CHOICES,
  THEME_CHOICES,
} from '../../app/game-settings';
import { getBoardImage, getThemeModifierClass } from '../../app/theme-assets';

export function createGameTemplate(settings: GameSettings): string {
  const gameThemeClassName = getThemeModifierClass(settings.theme);
  const boardImage = getBoardImage(settings.theme, settings.boardSize);

  return `
    <main class="game-screen ${gameThemeClassName}" aria-labelledby="game-title">
      <div class="game-screen__canvas">
        <img
          class="game-screen__board"
          src="${boardImage}"
          alt="Memory board"
        />

        <header class="game-screen__overlay">
          <h1 id="game-title">Game</h1>
          <p>${readMetaText(settings)}</p>
          <button id="game-back-button" type="button">Settings</button>
        </header>
      </div>
    </main>
  `;
}

function readMetaText(settings: GameSettings): string {
  const themeLabel = readChoiceLabel(THEME_CHOICES, settings.theme);
  const playerLabel = readChoiceLabel(PLAYER_CHOICES, settings.player);
  const boardLabel = readChoiceLabel(BOARD_SIZE_CHOICES, settings.boardSize);

  return `Theme: ${themeLabel} | Player: ${playerLabel} | Board: ${boardLabel}`;
}

function readChoiceLabel<T extends string>(
  choices: SettingsChoice<T>[],
  value: T | null,
): string {
  if (!value) {
    return '-';
  }

  const selectedChoice = choices.find((choice) => choice.value === value);
  return selectedChoice ? selectedChoice.label : '-';
}
