import {
  FAVORITE_MOVIES_ADD,
  FAVORITE_MOVIES_REMOVE,
} from './FavoriteMovies.actions';
import { FavoriteMoviesReduxAction, FavoriteMoviesReduxState } from './FavoriteMovies.interfaces';

export const initialActionFavoriteMovies: FavoriteMoviesReduxAction = {
  data: null,
  type: ''
};

export const initialStateFavoriteMovies: FavoriteMoviesReduxState = {
  action: '',
  result: [],
};

export function favoriteMoviesReducer(
  state: FavoriteMoviesReduxState = initialStateFavoriteMovies,
  action: FavoriteMoviesReduxAction = initialActionFavoriteMovies
): FavoriteMoviesReduxState {
  const newData = action.data;

  switch (action.type) {
    case FAVORITE_MOVIES_ADD:
      return {
        ...state,
        action: action.type,
        result: newData ? [...state.result, newData] : [...state.result],
      };
    case FAVORITE_MOVIES_REMOVE:
      return {
        ...state,
        result: [...state.result.filter(item => item.id !== newData?.id)],
        action: action.type,
      };

    default:
      return state;
  }
}
