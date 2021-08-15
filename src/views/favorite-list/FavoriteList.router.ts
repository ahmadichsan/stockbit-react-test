import React from 'react';
import { RoutePath } from '../../interfaces';

/**
 * import this file in src > config > Router.ts
 */

export const favoriteListRouter: RoutePath[] = [
  {
    path: '/favorites',
    name: 'Favorites',
    exact: true,
    component: React.lazy(() => import('./FavoriteList')),
  },
];
