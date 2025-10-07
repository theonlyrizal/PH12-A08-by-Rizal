import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps';
import AppNotFound from '../pages/AppNotFound/AppNotFound';
import AppDetails from '../pages/AppDetails/AppDetails';
import Installation from '../pages/Installation/Installation';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'apps',
        element: <Apps />,
        children: [
          {
            path: ':id',
            element: <AppDetails />,
            errorElement: <AppNotFound />,
          },
        ],
      },
      {
        path: 'installation',
        element: <Installation />,
      },
    ],
  },
]);
