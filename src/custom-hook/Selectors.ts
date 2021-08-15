import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../app/App.reducers';
import { MovieObject } from '../interfaces';
import { favoriteMoviesAdd, favoriteMoviesRemove } from '../redux';

export function useConfigMovieSelector() {
  const configMovies = useSelector((state: AppState) => ({
    ...state.configMovies,
  }));

  return configMovies;
}

export function useFavoriteMoviesSelector() {
  const dispatch = useDispatch();

  const favoriteMovies = useSelector((state: AppState) => ({
    ...state.favoriteMovies,
  }));

  const addToFavorites = (data: MovieObject) => {
    dispatch(favoriteMoviesAdd(data));
  };

  const removeFavorites = (data: MovieObject) => {
    dispatch(favoriteMoviesRemove(data));
  };

  return { favoriteMovies, addToFavorites, removeFavorites };
}
