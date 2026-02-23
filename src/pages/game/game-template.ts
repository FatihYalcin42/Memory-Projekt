import type { BoardSizeOption, GameSettings } from '../../app/game-settings';
import { getThemeModifierClass } from '../../app/theme-assets';
import playerLabelIconRaw from '../../../puplic/designs/theme_1/label.svg?raw';
import exitButtonSprite from '../../../puplic/icons/icons_1/exitgame1.svg';
import cardBackSprite from '../../../puplic/icons/icons_1/Cards 5.svg';
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

const CARD_FACE_ICONS: string[] = [
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

export function createGameTemplate(settings: GameSettings): string {
  const gameThemeClassName = getThemeModifierClass(settings.theme);
  const boardSize = settings.boardSize ?? '16';
  const boardSizeClassName = readBoardSizeClassName(boardSize);
  const boardCards = createBoardCards(boardSize);
  const isCodeVibesTheme = settings.theme !== 'foods';
  const playerMarkerClassName = settings.player === 'orange'
    ? ' is-orange'
    : ' is-blue';

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
        ${isCodeVibesTheme
    ? createCodeVibesHud(playerMarkerClassName)
    : createFallbackHud()}
      </div>
    </main>
  `;
}

function createCodeVibesHud(playerMarkerClassName: string): string {
  const playerLabelIcon = createPlayerLabelIconMarkup();

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

      <span
        class="game-screen__current-player-marker${playerMarkerClassName}"
        data-current-player-marker
        aria-hidden="true"
      >
        ${playerLabelIcon}
      </span>

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

function createPlayerLabelIconMarkup(): string {
  return playerLabelIconRaw
    .replace(/fill="#2BB1FF"/gi, 'fill="currentColor"')
    .trim();
}

function createFallbackHud(): string {
  return `
    <div class="game-screen__hud">
      <button
        id="game-exit-button"
        class="game-screen__exit-fallback"
        type="button"
      >
        Exit game
      </button>
    </div>
  `;
}

function createBoardCards(boardSize: BoardSizeOption): string {
  const parsedCount = Number.parseInt(boardSize, 10);
  const cardCount = Number.isFinite(parsedCount) && parsedCount > 0
    ? parsedCount
    : 16;
  const pairCount = Math.floor(cardCount / 2);
  const pairIcons = createPairIcons(pairCount);
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
            style="background-image: url('${cardBackSprite}')"
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

function createPairIcons(pairCount: number): string[] {
  return Array.from({ length: pairCount }, (_, index) => {
    return CARD_FACE_ICONS[index % CARD_FACE_ICONS.length];
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
