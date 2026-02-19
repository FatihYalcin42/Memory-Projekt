import './styles/main.scss';
import { mountHomePage } from './pages/home/home-page';

function initApp(): void {
  const appRoot = document.getElementById('app');
  if (!appRoot) {
    return;
  }

  mountHomePage(appRoot);
}

initApp();
