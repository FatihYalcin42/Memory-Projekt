import { hasCompleteSettings } from './game-settings';
import { hasGameResult } from './game-result';
import { mountGamePage } from '../pages/game/game-page';
import { mountGameOverPage } from '../pages/game-over/game-over-page';
import { mountHomePage } from '../pages/home/home-page';
import { mountSettingsPage } from '../pages/settings/settings-page';

type RouteName = 'game' | 'game-over' | 'home' | 'settings';

export function startRouter(target: HTMLElement): void {
  renderRoute(target);
  window.addEventListener('hashchange', () => {
    renderRoute(target);
  });
}

function renderRoute(target: HTMLElement): void {
  const routeName = readRoute();
  if (routeName === 'home') {
    mountHomePage(target);
    return;
  }

  if (routeName === 'settings') {
    mountSettingsPage(target);
    return;
  }

  if (routeName === 'game-over') {
    renderGameOverRoute(target);
    return;
  }

  renderGameRoute(target);
}

function renderGameRoute(target: HTMLElement): void {
  if (!hasCompleteSettings()) {
    window.location.hash = '#settings';
    return;
  }

  mountGamePage(target);
}

function renderGameOverRoute(target: HTMLElement): void {
  if (!hasCompleteSettings()) {
    window.location.hash = '#settings';
    return;
  }

  if (!hasGameResult()) {
    window.location.hash = '#game';
    return;
  }

  mountGameOverPage(target);
}

function readRoute(): RouteName {
  const hash = window.location.hash.toLowerCase();
  if (hash === '#settings') {
    return 'settings';
  }

  if (hash === '#game') {
    return 'game';
  }

  if (hash === '#game-over') {
    return 'game-over';
  }

  return 'home';
}
