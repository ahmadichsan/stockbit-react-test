import { RoutePath } from '../interfaces';

import { landingPageRouter } from '../views/landing-page/LandingPage.router';
import { movieDetailRouter } from '../views/movie-detail/MovieDetail.router';
import { favoriteListRouter } from '../views/favorite-list/FavoriteList.router';

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
export const routerContainer: RoutePath[] = [
  ...landingPageRouter,
  ...movieDetailRouter,
  ...favoriteListRouter,
];

