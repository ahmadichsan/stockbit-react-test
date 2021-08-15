/*
 * Examples:
 * import { ReducerSome } from '../modules/auth/ReducerSome';
 * const reducers: object = {
 *   some: ReducerSome,
 * };
 * export default reducers;
 */

import { configMoviesReducer, favoriteMoviesReducer } from '../redux';

export const configReducer = {
  configMovies: configMoviesReducer,
  favoriteMovies: favoriteMoviesReducer,
};
