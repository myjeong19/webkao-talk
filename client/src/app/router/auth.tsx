import { lazy } from 'react';

const Layout = lazy(() => import('@/shared/layouts/auth'));
const Login = lazy(() => import('@/pages/auth/login'));
const SinuUp = lazy(() => import('@/pages/auth/sign-up'));

export const NON_AUTH = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SinuUp />,
      },
    ],
  },
];
