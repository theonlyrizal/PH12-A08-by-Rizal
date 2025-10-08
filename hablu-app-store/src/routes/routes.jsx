import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps';
import AppNotFound from '../pages/AppNotFound/AppNotFound';
import AppDetails from '../pages/AppDetails/AppDetails';
import Installation from '../pages/Installation/Installation';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import axios from 'axios';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          const res = await axios.get('/data/apps.json');
          return res.data;
        },
      },
      {
        path: '/apps',
        element: <Apps />,
        loader: async () => {
          const res = await axios.get('/data/apps.json');
          return res.data;
        },
      },
      {
        path: '/apps/:id',
        element: <AppDetails />,
        loader: async ({ params }) => {
          const res = await axios.get('/data/apps.json');
          const apps = res.data;

          // Convert URL param to number
          const app = apps.find((pick) => pick.id === Number(params.id));

          if (!app) throw new Response('Not Found', { status: 404 });
          return app;
        },
        errorElement: <AppNotFound />,
      },
      {
        path: '/installation',
        element: <Installation />,
      },
    ],
  },
]);
