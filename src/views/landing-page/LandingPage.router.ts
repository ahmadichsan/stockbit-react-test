import React from 'react';
import { RoutePath } from '../../interfaces';

export const landingPageRouter: RoutePath[] = [
  {
    path: '/',
    name: 'Landing Page',
    exact: true,
    component: React.lazy(() => import('./LandingPage')),
  },
];
