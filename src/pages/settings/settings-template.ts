import type {
  BoardSizeOption,
  GameSettings,
  PlayerOption,
  SettingsChoice,
  ThemeOption,
} from '../../app/game-settings';
import {
  BOARD_SIZE_CHOICES,
  PLAYER_CHOICES,
  THEME_CHOICES,
  hasCompleteSettings,
} from '../../app/game-settings';
import boardSizeIcon from '../../../puplic/designs/theme_1/style.svg';
import lineAccent from '../../../puplic/designs/theme_1/Line 6.svg';
import playerIcon from '../../../puplic/designs/theme_1/chess_pawn.svg';
import previewImage from '../../../puplic/designs/theme_1/setting-picture.svg';
import startButtonImage from '../../../puplic/designs/theme_1/small button.svg';
import themeIcon from '../../../puplic/designs/theme_1/fiber_manual_record.svg';

type SettingsGroup = 'boardSize' | 'player' | 'theme';

export function createSettingsTemplate(settings: GameSettings): string {
  return `
    <main class="settings-screen" aria-labelledby="settings-title">
      <div class="settings-screen__canvas">
        <section class="settings-panel">
          <h1 id="settings-title" class="settings-panel__title">Settings</h1>
          ${createSettingsGroup('Game themes', themeIcon, createThemeOptions(settings.theme))}
          ${createSettingsGroup('Choose player', playerIcon, createPlayerOptions(settings.player))}
          ${createSettingsGroup('Board size', boardSizeIcon, createBoardSizeOptions(settings.boardSize))}
        </section>

        <aside class="settings-preview">
          <img src="${previewImage}" alt="Game preview" />
        </aside>

        <section class="settings-footer">
          ${createSummary(settings)}
          ${createStartButton()}
        </section>
      </div>
    </main>
  `;
}

function createSettingsGroup(
  title: string,
  icon: string,
  optionsMarkup: string,
): string {
  return `
    <section class="settings-group">
      <h2 class="settings-group__title">
        <img src="${icon}" alt="" aria-hidden="true" />
        <span>${title}</span>
      </h2>
      <ul class="settings-group__options">${optionsMarkup}</ul>
    </section>
  `;
}

function createThemeOptions(selectedTheme: ThemeOption | null): string {
  return THEME_CHOICES.map((choice) => {
    const isDisabled = choice.value !== 'code-vibes';
    return createOptionButton(
      'theme',
      choice.value,
      choice.label,
      selectedTheme === choice.value,
      true,
      isDisabled,
    );
  }).join('');
}

function createPlayerOptions(selectedPlayer: PlayerOption | null): string {
  return PLAYER_CHOICES.map((choice) => {
    return createOptionButton(
      'player',
      choice.value,
      choice.label,
      selectedPlayer === choice.value,
    );
  }).join('');
}

function createBoardSizeOptions(selectedSize: BoardSizeOption | null): string {
  return BOARD_SIZE_CHOICES.map((choice) => {
    return createOptionButton(
      'boardSize',
      choice.value,
      choice.label,
      selectedSize === choice.value,
    );
  }).join('');
}

function createOptionButton(
  group: SettingsGroup,
  value: string,
  label: string,
  isSelected: boolean,
  showLine = false,
  isDisabled = false,
): string {
  const selectedClass = isSelected ? ' is-selected' : '';
  const disabledClass = isDisabled ? ' is-disabled' : '';
  const lineMarkup = showLine && isSelected ? createLineAccent() : '';
  const disabledAttribute = isDisabled ? 'disabled' : '';

  return `
    <li class="settings-option-item">
      <button
        class="settings-option${selectedClass}${disabledClass}"
        type="button"
        data-group="${group}"
        data-value="${value}"
        ${disabledAttribute}
      >
        <span class="settings-option__marker" aria-hidden="true"></span>
        <span class="settings-option__label">${label}</span>
        ${lineMarkup}
      </button>
    </li>
  `;
}

function createLineAccent(): string {
  return `
    <img
      class="settings-option__line"
      src="${lineAccent}"
      alt=""
      aria-hidden="true"
    />
  `;
}

function createSummary(settings: GameSettings): string {
  return `
    <div class="settings-summary">
      ${createSummaryItem('Game theme', readChoiceLabel(THEME_CHOICES, settings.theme))}
      ${createSummaryItem('Player', readChoiceLabel(PLAYER_CHOICES, settings.player))}
      ${createSummaryItem('Board size', readChoiceLabel(BOARD_SIZE_CHOICES, settings.boardSize))}
    </div>
  `;
}

function createSummaryItem(label: string, value: string): string {
  return `
    <div class="settings-summary__item">
      <span class="settings-summary__label">${label}</span>
      <span class="settings-summary__value">${value}</span>
    </div>
  `;
}

function createStartButton(): string {
  const isReady = hasCompleteSettings();
  const stateClass = isReady ? ' is-ready' : ' is-disabled';
  const disabledAttribute = isReady ? '' : 'disabled';

  return `
    <button
      id="start-game-button"
      class="settings-start-button${stateClass}"
      type="button"
      ${disabledAttribute}
    >
      <img src="${startButtonImage}" alt="Start game" />
    </button>
  `;
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
