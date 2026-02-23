import type {
  BoardSizeOption,
  GameSettings,
  ThemeOption,
} from '../../app/game-settings';
import { getThemeModifierClass, resolveTheme } from '../../app/theme-assets';
import codeVibesPlayerLabelIconRaw from '../../../puplic/designs/theme_1/label.svg?raw';
import foodsPlayerMarkerIconRaw from '../../../puplic/designs/theme2/Frame 614.svg?raw';
import exitButtonSprite from '../../../puplic/icons/icons_1/exitgame1.svg';
import backToGameButtonSprite from '../../../puplic/designs/theme_1/back-to-game-button.svg';
import exitGameButtonSprite from '../../../puplic/designs/theme_1/exit-game-button.svg';
import foodsExitHeaderButtonSprite from '../../../puplic/icons/icons_2/exit-game-button.svg';
import foodsExitHeaderButtonHoverSprite from '../../../puplic/icons/icons_2/exit-game-button-hover.svg';
import foodsBackToGameButtonSprite from '../../../puplic/icons/icons_2/back-to-game-button.svg';
import foodsBackToGameButtonHoverSprite from '../../../puplic/icons/icons_2/back-to-game-button-hover.svg';
import foodsExitOverlayButtonSprite from '../../../puplic/icons/icons_2/exit-game-button-overlay.svg';
import foodsExitOverlayButtonHoverSprite from '../../../puplic/icons/icons_2/exit-game-button-overlay-hover.svg';
import codeVibesCardBackSprite from '../../../puplic/icons/icons_1/Cards 5.svg';
import angularCardIcon from '../../../puplic/icons/icons_1/angular-card.svg';
import bootstrapCardIcon from '../../../puplic/icons/icons_1/bootstrap-card.svg';
import cssCardIcon from '../../../puplic/icons/icons_1/css-card.svg';
import databaseCardIcon from '../../../puplic/icons/icons_1/database-card.svg';
import djangoCardIcon from '../../../puplic/icons/icons_1/django-card.svg';
import firebaseCardIcon from '../../../puplic/icons/icons_1/firebase-card.svg';
import githubCardIcon from '../../../puplic/icons/icons_1/guthub-card.svg';
import html5CardIcon from '../../../puplic/icons/icons_1/html5-card.svg';
import jsCardIcon from '../../../puplic/icons/icons_1/js-card.svg';
import nodeCardIcon from '../../../puplic/icons/icons_1/node-card.svg';
import pythonCardIcon from '../../../puplic/icons/icons_1/python-card.svg';
import reactCardIcon from '../../../puplic/icons/icons_1/react-card.svg';
import sassCardIcon from '../../../puplic/icons/icons_1/sass-card.svg';
import terminalCardIcon from '../../../puplic/icons/icons_1/terminal-card.svg';
import tsCardIcon from '../../../puplic/icons/icons_1/ts-card.svg';
import vscodeCardIcon from '../../../puplic/icons/icons_1/vscode-card.svg';
import vueCardIcon from '../../../puplic/icons/icons_1/vue-card.svg';
import foodsCardBackSprite from '../../../puplic/icons/icons_2/back-card.svg';
import brezelCardIcon from '../../../puplic/icons/icons_2/brezel-card.svg';
import cakeCardIcon from '../../../puplic/icons/icons_2/cake-card.svg';
import chickenCardIcon from '../../../puplic/icons/icons_2/chicken-card.svg';
import chocolateCardIcon from '../../../puplic/icons/icons_2/chocolate-card.svg';
import corndogCardIcon from '../../../puplic/icons/icons_2/corndog-card.svg';
import donutCardIcon from '../../../puplic/icons/icons_2/donut-card.svg';
import hamburgerCardIcon from '../../../puplic/icons/icons_2/hamburger-card.svg';
import icecreamCardIcon from '../../../puplic/icons/icons_2/icecream-card.svg';
import macronCardIcon from '../../../puplic/icons/icons_2/macron-card.svg';
import muffinCardIcon from '../../../puplic/icons/icons_2/muffin-card.svg';
import pizzaCardIcon from '../../../puplic/icons/icons_2/pizza-card.svg';
import pommesCardIcon from '../../../puplic/icons/icons_2/pommes-card.svg';
import puddingCardIcon from '../../../puplic/icons/icons_2/pudding-card.svg';
import saladCardIcon from '../../../puplic/icons/icons_2/salad-card.svg';
import sandwichCardIcon from '../../../puplic/icons/icons_2/sandwich-card.svg';
import sushiCardIcon from '../../../puplic/icons/icons_2/sushi-card.svg';
import taccoCardIcon from '../../../puplic/icons/icons_2/tacco-card.svg';
import wraoCardIcon from '../../../puplic/icons/icons_2/wrao-card.svg';

interface ThemeCardAssets {
  backCardSprite: string;
  faceIcons: string[];
}

const CODE_VIBES_CARD_FACE_ICONS: string[] = [
  angularCardIcon,
  bootstrapCardIcon,
  cssCardIcon,
  databaseCardIcon,
  djangoCardIcon,
  firebaseCardIcon,
  githubCardIcon,
  html5CardIcon,
  jsCardIcon,
  nodeCardIcon,
  pythonCardIcon,
  reactCardIcon,
  sassCardIcon,
  terminalCardIcon,
  tsCardIcon,
  vscodeCardIcon,
  vueCardIcon,
];

const FOODS_CARD_FACE_ICONS: string[] = [
  brezelCardIcon,
  cakeCardIcon,
  chickenCardIcon,
  chocolateCardIcon,
  corndogCardIcon,
  donutCardIcon,
  hamburgerCardIcon,
  icecreamCardIcon,
  macronCardIcon,
  muffinCardIcon,
  pizzaCardIcon,
  pommesCardIcon,
  puddingCardIcon,
  saladCardIcon,
  sandwichCardIcon,
  sushiCardIcon,
  taccoCardIcon,
  wraoCardIcon,
];

const THEME_CARD_ASSETS: Record<ThemeOption, ThemeCardAssets> = {
  'code-vibes': {
    backCardSprite: codeVibesCardBackSprite,
    faceIcons: CODE_VIBES_CARD_FACE_ICONS,
  },
  foods: {
    backCardSprite: foodsCardBackSprite,
    faceIcons: FOODS_CARD_FACE_ICONS,
  },
};

/**
 * Builds the game screen markup for the active settings.
 *
 * @param settings Selected game settings.
 * @returns Game screen HTML string.
 */
export function createGameTemplate(settings: GameSettings): string {
  const selectedTheme = resolveTheme(settings.theme);
  const gameThemeClassName = getThemeModifierClass(settings.theme);
  const boardSize = settings.boardSize ?? '16';
  const boardSizeClassName = readBoardSizeClassName(boardSize);
  const boardCards = createBoardCards(boardSize, selectedTheme);
  const playerMarkerClassName = settings.player === 'orange'
    ? ' is-orange'
    : ' is-blue';
  const hudMarkup = selectedTheme === 'foods'
    ? createFoodsHud(playerMarkerClassName)
    : createCodeVibesHud(playerMarkerClassName);

  return `
    <main class="game-screen ${gameThemeClassName} ${boardSizeClassName}" aria-labelledby="game-title">
      <h1 id="game-title" class="game-screen__sr-only">Game</h1>
      <div class="game-screen__canvas">
        <section class="game-screen__board-area" aria-label="Game board">
          <div
            class="game-screen__board-grid"
            id="game-board"
            data-board-size="${boardSize}"
          >
            ${boardCards}
          </div>
        </section>
        ${hudMarkup}

        ${createExitModalMarkup(selectedTheme)}
      </div>
    </main>
  `;
}

function createCodeVibesHud(playerMarkerClassName: string): string {
  const playerLabelIcon = createCodeVibesPlayerLabelIconMarkup();

  return `
    <div class="game-screen__hud">
      <div class="game-screen__scoreboard" aria-label="Scoreboard">
        <span class="game-screen__score game-screen__score--blue">
          <span class="game-screen__score-icon" aria-hidden="true">
            ${playerLabelIcon}
          </span>
          <span>Blue</span>
          <span class="game-screen__score-value" data-score-player="blue">0</span>
        </span>
        <span class="game-screen__score game-screen__score--orange">
          <span class="game-screen__score-icon" aria-hidden="true">
            ${playerLabelIcon}
          </span>
          <span>Orange</span>
          <span class="game-screen__score-value" data-score-player="orange">0</span>
        </span>
      </div>

      <div class="game-screen__current-player" aria-label="Current player">
        <span class="game-screen__current-player-text">Current player:</span>
        <span
          class="game-screen__current-player-marker${playerMarkerClassName}"
          data-current-player-marker
          aria-hidden="true"
        >
          ${playerLabelIcon}
        </span>
      </div>

      <button
        id="game-exit-button"
        class="game-screen__exit-button"
        type="button"
        aria-label="Exit game"
      >
        <img
          class="game-screen__exit-button-image"
          src="${exitButtonSprite}"
          alt=""
          aria-hidden="true"
        />
      </button>
    </div>
  `;
}

function createCodeVibesPlayerLabelIconMarkup(): string {
  return codeVibesPlayerLabelIconRaw
    .replace(/fill="#2BB1FF"/gi, 'fill="currentColor"')
    .trim();
}

function createFoodsHud(playerMarkerClassName: string): string {
  const scoreIcon = createFoodsScoreIconMarkup();
  const playerMarkerIcon = createFoodsPlayerMarkerIconMarkup();

  return `
    <div class="game-screen__hud game-screen__hud--foods">
      <div class="game-screen__foods-topbar">
        <div class="game-screen__scoreboard" aria-label="Scoreboard">
          <span class="game-screen__score game-screen__score--orange">
            <span class="game-screen__score-icon" aria-hidden="true">
              ${scoreIcon}
            </span>
            <span class="game-screen__score-value" data-score-player="orange">0</span>
          </span>
          <span class="game-screen__score game-screen__score--blue">
            <span class="game-screen__score-icon" aria-hidden="true">
              ${scoreIcon}
            </span>
            <span class="game-screen__score-value" data-score-player="blue">0</span>
          </span>
        </div>

        <div class="game-screen__current-player" aria-label="Current player">
          <span class="game-screen__current-player-text">Current player:</span>
          <span
            class="game-screen__current-player-marker${playerMarkerClassName}"
            data-current-player-marker
            aria-hidden="true"
          >
            ${playerMarkerIcon}
          </span>
        </div>

        <button
          id="game-exit-button"
          class="game-screen__exit-button game-screen__exit-button--foods"
          type="button"
          aria-label="Exit game"
        >
          <img
            class="game-screen__exit-button-image game-screen__exit-button-image--foods game-screen__exit-button-image--foods-default"
            src="${foodsExitHeaderButtonSprite}"
            alt=""
            aria-hidden="true"
          />
          <img
            class="game-screen__exit-button-image game-screen__exit-button-image--foods game-screen__exit-button-image--foods-hover"
            src="${foodsExitHeaderButtonHoverSprite}"
            alt=""
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  `;
}

function createFoodsScoreIconMarkup(): string {
  return foodsPlayerMarkerIconRaw
    .replace(/<rect[^>]*fill="#097FC5"[^>]*\/>\s*/gi, '')
    .replace(/fill="white"/gi, 'fill="currentColor"')
    .trim();
}

function createFoodsPlayerMarkerIconMarkup(): string {
  return foodsPlayerMarkerIconRaw
    .replace(/fill="#097FC5"/gi, 'fill="currentColor"')
    .trim();
}

function createExitModalMarkup(theme: ThemeOption): string {
  if (theme === 'foods') {
    return createFoodsExitModalMarkup();
  }

  return createCodeVibesExitModalMarkup();
}

function createCodeVibesExitModalMarkup(): string {
  return `
    <div
      class="game-screen__exit-modal"
      data-exit-modal
      hidden
    >
      <div class="game-screen__exit-modal-panel" role="dialog" aria-modal="true" aria-labelledby="exit-modal-title">
        <h2 id="exit-modal-title" class="game-screen__exit-modal-title">
          Are you sure you want to quit the game?
        </h2>

        <div class="game-screen__exit-modal-actions">
          <button
            type="button"
            class="game-screen__modal-button game-screen__modal-button--back"
            data-exit-cancel
            aria-label="Back to game"
          >
            <img
              class="game-screen__modal-button-image"
              src="${backToGameButtonSprite}"
              alt=""
              aria-hidden="true"
            />
          </button>

          <button
            type="button"
            class="game-screen__modal-button game-screen__modal-button--exit"
            data-exit-confirm
            aria-label="Exit game"
          >
            <img
              class="game-screen__modal-button-image"
              src="${exitGameButtonSprite}"
              alt=""
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  `;
}

function createFoodsExitModalMarkup(): string {
  return `
    <div
      class="game-screen__exit-modal game-screen__exit-modal--foods"
      data-exit-modal
      hidden
    >
      <div
        class="game-screen__exit-modal-panel game-screen__exit-modal-panel--foods"
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-modal-title"
      >
        <h2 id="exit-modal-title" class="game-screen__exit-modal-title game-screen__exit-modal-title--foods">
          Are you sure you want to quit the game?
        </h2>

        <div class="game-screen__exit-modal-actions game-screen__exit-modal-actions--foods">
          <button
            type="button"
            class="game-screen__modal-button game-screen__modal-button--foods game-screen__modal-button--back"
            data-exit-cancel
            aria-label="Back to game"
          >
            <img
              class="game-screen__modal-button-image game-screen__modal-button-image--foods game-screen__modal-button-image--foods-back game-screen__modal-button-image--foods-default"
              src="${foodsBackToGameButtonSprite}"
              alt=""
              aria-hidden="true"
            />
            <img
              class="game-screen__modal-button-image game-screen__modal-button-image--foods game-screen__modal-button-image--foods-back game-screen__modal-button-image--foods-hover"
              src="${foodsBackToGameButtonHoverSprite}"
              alt=""
              aria-hidden="true"
            />
          </button>

          <button
            type="button"
            class="game-screen__modal-button game-screen__modal-button--foods game-screen__modal-button--exit"
            data-exit-confirm
            aria-label="Exit game"
          >
            <img
              class="game-screen__modal-button-image game-screen__modal-button-image--foods game-screen__modal-button-image--foods-exit game-screen__modal-button-image--foods-default"
              src="${foodsExitOverlayButtonSprite}"
              alt=""
              aria-hidden="true"
            />
            <img
              class="game-screen__modal-button-image game-screen__modal-button-image--foods game-screen__modal-button-image--foods-exit game-screen__modal-button-image--foods-hover"
              src="${foodsExitOverlayButtonHoverSprite}"
              alt=""
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  `;
}

function createBoardCards(
  boardSize: BoardSizeOption,
  theme: ThemeOption,
): string {
  const parsedCount = Number.parseInt(boardSize, 10);
  const cardCount = Number.isFinite(parsedCount) && parsedCount > 0
    ? parsedCount
    : 16;
  const themeCardAssets = THEME_CARD_ASSETS[theme];
  const pairCount = Math.floor(cardCount / 2);
  const pairIcons = createPairIcons(pairCount, theme);
  const cardIconsDeck = shuffleArray([...pairIcons, ...pairIcons]);

  return cardIconsDeck.map((cardIcon, index) => {
    return `
      <button
        class="game-card"
        type="button"
        data-card-index="${index}"
        data-card-icon="${cardIcon}"
      >
        <span class="game-card__inner">
          <span
            class="game-card__face game-card__face--front"
            style="background-image: url('${themeCardAssets.backCardSprite}')"
            aria-hidden="true"
          ></span>
          <span
            class="game-card__face game-card__face--back"
            style="background-image: url('${cardIcon}')"
            aria-hidden="true"
          ></span>
        </span>
      </button>
    `;
  }).join('');
}

function createPairIcons(pairCount: number, theme: ThemeOption): string[] {
  const faceIcons = THEME_CARD_ASSETS[theme].faceIcons;

  return Array.from({ length: pairCount }, (_, index) => {
    return faceIcons[index % faceIcons.length];
  });
}

function shuffleArray<T>(items: T[]): T[] {
  const shuffledItems = [...items];
  for (let index = shuffledItems.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledItems[index], shuffledItems[randomIndex]] = [
      shuffledItems[randomIndex],
      shuffledItems[index],
    ];
  }

  return shuffledItems;
}

function readBoardSizeClassName(boardSize: BoardSizeOption): string {
  if (boardSize === '24') {
    return 'game-screen--board-24';
  }

  if (boardSize === '36') {
    return 'game-screen--board-36';
  }

  return 'game-screen--board-16';
}
