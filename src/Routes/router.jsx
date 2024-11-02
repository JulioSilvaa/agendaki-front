import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

import Detail from '@pages/Detail';
import Login from '@pages/Login';
import Register from '@pages/Register';
import Home from '@pages/Home';
import Services from '@pages/services';
import DetailServices from '../pages/DetailServices';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/detalhes/:id',
        element: <Detail />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/servicos',
        element: <Services />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/detalheservico/:id',
        element: <DetailServices />,
      },
      {
        path: '*',
        element: 'Page Not Found !',
      },
    ],
  },
]);
