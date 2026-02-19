import type {
  BoardSizeOption,
  GameSettings,
  PlayerOption,
  ThemeOption,
} from '../../app/game-settings';
import {
  BOARD_SIZE_CHOICES,
  PLAYER_CHOICES,
  THEME_CHOICES,
} from '../../app/game-settings';
import boardSizeIcon from '../../../puplic/designs/theme_1/style.svg';
import inactiveOptionIcon from '../../../puplic/designs/theme_1/fiber_manual_record.svg';
import activeOptionIcon from '../../../puplic/designs/theme_1/mode_standby.svg';
import gameThemeIcon from '../../../puplic/designs/theme_1/palette.svg';
import playerIcon from '../../../puplic/designs/theme_1/chess_pawn.svg';
import footerSeparatorActive from '../../../puplic/designs/theme_1/footer-separator-active.svg';
import footerSeparatorLine from '../../../puplic/designs/theme_1/Line 6.svg';
import selectedOptionLine from '../../../puplic/designs/theme_1/select-line.svg';
import codeVibesPreviewImage from '../../../puplic/designs/theme_1/setting-picture.svg';
import foodsPreviewImage from '../../../puplic/designs/theme-visiual-food.svg';
import startButtonImage from '../../../puplic/designs/theme_1/small button.svg';

type SettingsGroup = 'boardSize' | 'player' | 'theme';

export function createSettingsTemplate(settings: GameSettings): string {
  const isComplete =
    settings.theme !== null &&
    settings.player !== null &&
    settings.boardSize !== null;
  const previewImage = settings.theme === 'foods'
    ? foodsPreviewImage
    : codeVibesPreviewImage;

  return `
    <main class="settings-screen" aria-labelledby="settings-title">
      <div class="settings-screen__canvas">
        <section class="settings-panel">
          <h1 id="settings-title" class="settings-panel__title">Settings</h1>
          ${createSettingsGroup('Game themes', gameThemeIcon, createThemeOptions(settings.theme))}
          ${createSettingsGroup('Choose player', playerIcon, createPlayerOptions(settings.player))}
          ${createSettingsGroup('Board size', boardSizeIcon, createBoardSizeOptions(settings.boardSize))}
        </section>

        <aside class="settings-preview">
          <img
            class="settings-preview__image"
            src="${previewImage}"
            data-preview-default="${codeVibesPreviewImage}"
            data-preview-code-vibes="${codeVibesPreviewImage}"
            data-preview-foods="${foodsPreviewImage}"
            alt="Game preview"
          />
        </aside>

        <section class="settings-footer">
          ${createFooterSummary(settings, isComplete)}
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
    return createOptionButton(
      'theme',
      choice.value,
      choice.label,
      selectedTheme === choice.value,
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
): string {
  const selectedClass = isSelected ? ' is-selected' : '';
  const visibleLineClass = isSelected ? ' is-visible' : '';
  const markerIcon = isSelected ? activeOptionIcon : inactiveOptionIcon;
  const previewThemeAttribute = group === 'theme'
    ? ` data-preview-theme="${value}"`
    : '';

  return `
    <li class="settings-option-item">
      <button
        class="settings-option${selectedClass}"
        type="button"
        data-group="${group}"
        data-value="${value}"
        ${previewThemeAttribute}
      >
        <img
          class="settings-option__marker"
          src="${markerIcon}"
          data-active-icon="${activeOptionIcon}"
          data-inactive-icon="${inactiveOptionIcon}"
          alt=""
          aria-hidden="true"
        />
        <span class="settings-option__label">${label}</span>
        <img
          class="settings-option__line${visibleLineClass}"
          src="${selectedOptionLine}"
          alt=""
          aria-hidden="true"
        />
      </button>
    </li>
  `;
}

function createFooterSummary(settings: GameSettings, isComplete: boolean): string {
  return `
    <div class="settings-footer__summary" aria-live="polite">
      <div class="settings-footer__fields">
        ${createFooterItem('theme', formatThemeSummary(settings.theme), settings.theme !== null, true)}
        ${createFooterItem('player', formatPlayerSummary(settings.player), settings.player !== null, true)}
        ${createFooterItem('boardSize', formatBoardSummary(settings.boardSize), settings.boardSize !== null, false)}
      </div>
      ${createStartButton(isComplete)}
    </div>
  `;
}

function createFooterItem(
  group: SettingsGroup,
  text: string,
  isSelected: boolean,
  withSeparator: boolean,
): string {
  const selectedClass = isSelected ? ' is-selected' : '';
  const separatorMarkup = withSeparator
    ? `<img
      class="settings-footer__separator"
      src="${footerSeparatorLine}"
      data-separator-inactive="${footerSeparatorLine}"
      data-separator-active="${footerSeparatorActive}"
      alt=""
      aria-hidden="true"
    />`
    : '';

  return `
    <div class="settings-footer__item${selectedClass}" data-summary-group="${group}">
      <span class="settings-footer__text" data-summary-text="${group}">${text}</span>
      ${separatorMarkup}
    </div>
  `;
}

function formatThemeSummary(theme: ThemeOption | null): string {
  if (!theme) {
    return 'Theme';
  }

  return 'Game theme';
}

function formatPlayerSummary(player: PlayerOption | null): string {
  if (!player) {
    return 'Player';
  }

  if (player === 'orange') {
    return 'Orange Player';
  }

  return 'Blue Player';
}

function formatBoardSummary(boardSize: BoardSizeOption | null): string {
  if (!boardSize) {
    return 'Board size';
  }

  return `Board-${boardSize} Cards`;
}

function createStartButton(isComplete: boolean): string {
  const readyClassName = isComplete ? ' is-ready' : '';
  const disabledAttribute = isComplete ? '' : 'disabled';

  return `
    <button
      id="start-game-button"
      class="settings-start-button${readyClassName}"
      type="button"
      aria-label="Start game"
      ${disabledAttribute}
    >
      <img
        class="settings-start-button__image"
        src="${startButtonImage}"
        alt=""
        aria-hidden="true"
      />
    </button>
  `;
}
