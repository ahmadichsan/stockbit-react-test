import React from 'react';
import { RoutePath } from '../../interfaces';

/**
 * import this file in src > config > Router.ts
 */

export const movieDetailRouter: RoutePath[] = [
  {
    path: '/movie/:movieId',
    name: 'Movie Detail',
    exact: true,
    component: React.lazy(() => import('./MovieDetail')),
  },
];
