import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import { router } from './routes/routes.jsx';
import AppInstallProvider from './context/AppInstallProvider.jsx';

document.body.setAttribute('data-theme', 'light');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppInstallProvider>
      <RouterProvider router={router} />
    </AppInstallProvider>
  </StrictMode>
);
