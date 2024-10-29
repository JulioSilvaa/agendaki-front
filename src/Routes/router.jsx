import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

import Detail from '@pages/Detail';
import Login from '@pages/Login';
import Register from '@pages/Register';
import Home from '@pages/Home';

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
        path: '/register',
        element: <Register />,
      },
      {
        path: '*',
        element: 'Page Not Found !',
      },
    ],
  },
]);
