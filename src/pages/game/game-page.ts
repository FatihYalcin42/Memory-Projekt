import { getGameSettings, type PlayerOption } from '../../app/game-settings';
import { setGameResult } from '../../app/game-result';
import { createGameTemplate } from './game-template';

const EXIT_BUTTON_SELECTOR = '#game-exit-button';
const CARD_SELECTOR = '.game-card';
const CURRENT_PLAYER_MARKER_SELECTOR = '[data-current-player-marker]';
const FLIPPED_CARD_CLASS = 'flipped';
const MATCHED_CARD_CLASS = 'is-matched';
const FLIP_BACK_DELAY_MS = 700;
const MATCH_FINISH_DELAY_MS = 320;

interface GameRuntimeState {
  currentPlayer: PlayerOption;
  firstFlippedCard: HTMLButtonElement | null;
  secondFlippedCard: HTMLButtonElement | null;
  isTurnLocked: boolean;
  scores: Record<PlayerOption, number>;
}

export function mountGamePage(target: HTMLElement): void {
  const settings = getGameSettings();
  target.innerHTML = createGameTemplate(settings);
  bindExitButton(target);
  bindMemoryGame(target, settings.player ?? 'blue');
}

function bindExitButton(target: HTMLElement): void {
  const exitButton = target.querySelector<HTMLButtonElement>(EXIT_BUTTON_SELECTOR);
  if (!exitButton) {
    return;
  }

  exitButton.addEventListener('click', () => {
    window.location.hash = '#settings';
  });
}

function bindMemoryGame(target: HTMLElement, initialPlayer: PlayerOption): void {
  const cards = Array.from(target.querySelectorAll<HTMLButtonElement>(CARD_SELECTOR));
  if (cards.length === 0) {
    return;
  }

  const gameState: GameRuntimeState = {
    currentPlayer: initialPlayer,
    firstFlippedCard: null,
    secondFlippedCard: null,
    isTurnLocked: false,
    scores: {
      blue: 0,
      orange: 0,
    },
  };

  syncHud(target, gameState);

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      handleCardSelection(target, cards.length, gameState, card);
    });
  });
}

function handleCardSelection(
  target: HTMLElement,
  totalCards: number,
  state: GameRuntimeState,
  selectedCard: HTMLButtonElement,
): void {
  if (
    state.isTurnLocked ||
    selectedCard.classList.contains(FLIPPED_CARD_CLASS) ||
    selectedCard.classList.contains(MATCHED_CARD_CLASS)
  ) {
    return;
  }

  toggleCardSwitchState(selectedCard);

  if (!state.firstFlippedCard) {
    state.firstFlippedCard = selectedCard;
    return;
  }

  state.secondFlippedCard = selectedCard;
  state.isTurnLocked = true;

  const hasMatch = isMatchingPair(state.firstFlippedCard, state.secondFlippedCard);

  if (hasMatch) {
    finishMatchedTurn(target, totalCards, state);
    return;
  }

  window.setTimeout(() => {
    if (
      state.firstFlippedCard &&
      state.firstFlippedCard.classList.contains(FLIPPED_CARD_CLASS)
    ) {
      toggleCardSwitchState(state.firstFlippedCard);
    }

    if (
      state.secondFlippedCard &&
      state.secondFlippedCard.classList.contains(FLIPPED_CARD_CLASS)
    ) {
      toggleCardSwitchState(state.secondFlippedCard);
    }

    state.currentPlayer = state.currentPlayer === 'blue' ? 'orange' : 'blue';
    resetTurn(state);
    syncHud(target, state);
  }, FLIP_BACK_DELAY_MS);
}

function toggleCardSwitchState(card: HTMLButtonElement): void {
  card.classList.toggle(FLIPPED_CARD_CLASS);
}

function isMatchingPair(
  firstCard: HTMLButtonElement,
  secondCard: HTMLButtonElement,
): boolean {
  const firstIcon = firstCard.dataset.cardIcon;
  const secondIcon = secondCard.dataset.cardIcon;

  return Boolean(firstIcon && secondIcon && firstIcon === secondIcon);
}

function finishMatchedTurn(
  target: HTMLElement,
  totalCards: number,
  state: GameRuntimeState,
): void {
  const firstCard = state.firstFlippedCard;
  const secondCard = state.secondFlippedCard;

  if (!firstCard || !secondCard) {
    resetTurn(state);
    return;
  }

  firstCard.classList.add(MATCHED_CARD_CLASS);
  secondCard.classList.add(MATCHED_CARD_CLASS);
  firstCard.disabled = true;
  secondCard.disabled = true;

  state.scores[state.currentPlayer] += 1;
  resetTurn(state);
  syncHud(target, state);

  const matchedCardsCount = target.querySelectorAll(`.${MATCHED_CARD_CLASS}`).length;
  if (matchedCardsCount === totalCards) {
    window.setTimeout(() => {
      setGameResult({
        blueScore: state.scores.blue,
        orangeScore: state.scores.orange,
      });
      window.location.hash = '#game-over';
    }, MATCH_FINISH_DELAY_MS);
  }
}

function resetTurn(state: GameRuntimeState): void {
  state.firstFlippedCard = null;
  state.secondFlippedCard = null;
  state.isTurnLocked = false;
}

function syncHud(target: HTMLElement, state: GameRuntimeState): void {
  setScoreValue(target, 'blue', state.scores.blue);
  setScoreValue(target, 'orange', state.scores.orange);

  const currentPlayerMarker = target.querySelector<HTMLElement>(
    CURRENT_PLAYER_MARKER_SELECTOR,
  );
  if (!currentPlayerMarker) {
    return;
  }

  currentPlayerMarker.classList.toggle('is-orange', state.currentPlayer === 'orange');
}

function setScoreValue(
  target: HTMLElement,
  player: PlayerOption,
  score: number,
): void {
  const scoreElements = target.querySelectorAll<HTMLElement>(
    `[data-score-player="${player}"]`,
  );
  if (scoreElements.length === 0) {
    return;
  }

  scoreElements.forEach((scoreElement) => {
    scoreElement.textContent = String(score);
  });
}
