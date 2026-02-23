export interface GameResult {
  blueScore: number;
  orangeScore: number;
}

let currentGameResult: GameResult | null = null;

export function setGameResult(result: GameResult): void {
  currentGameResult = { ...result };
}

export function getGameResult(): GameResult | null {
  if (!currentGameResult) {
    return null;
  }

  return { ...currentGameResult };
}

export function hasGameResult(): boolean {
  return currentGameResult !== null;
}

export function clearGameResult(): void {
  currentGameResult = null;
}
