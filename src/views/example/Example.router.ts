import React from 'react';
import { RoutePath } from '../../interfaces';

/**
 * import this file in src > config > Router.ts
 */

export const exampleRouter: RoutePath[] = [
  {
    path: '/example-router',
    name: 'Example Module',
    exact: true,
    component: React.lazy(() => import('./Example')),
  },
];
