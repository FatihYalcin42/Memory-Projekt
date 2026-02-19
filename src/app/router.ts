import { hasCompleteSettings } from './game-settings';
import { mountGamePage } from '../pages/game/game-page';
import { mountHomePage } from '../pages/home/home-page';
import { mountSettingsPage } from '../pages/settings/settings-page';

type RouteName = 'game' | 'home' | 'settings';

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

  renderGameRoute(target);
}

function renderGameRoute(target: HTMLElement): void {
  if (!hasCompleteSettings()) {
    window.location.hash = '#settings';
    return;
  }

  mountGamePage(target);
}

function readRoute(): RouteName {
  const hash = window.location.hash.toLowerCase();
  if (hash === '#settings') {
    return 'settings';
  }

  if (hash === '#game') {
    return 'game';
  }

  return 'home';
}
