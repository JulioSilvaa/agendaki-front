import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import App from '../App';
import Detail from './../pages/Detail';

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
        path: '*',
        element: 'Page Not Found !',
      },
    ],
  },
]);
