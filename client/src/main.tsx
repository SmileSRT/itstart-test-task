import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/shared/ui/index.css';
import MainPage from './pages/main/ui';
import MainLayout from './shared/ui/main-layout';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainLayout>
      <MainPage />
    </MainLayout>
  </StrictMode>,
);
