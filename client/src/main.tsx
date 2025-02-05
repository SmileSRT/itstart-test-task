import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/shared/ui/index.css';
import MainPage from './pages/main/ui';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainPage />
  </StrictMode>,
);
