import { MovieObject, ReduxAction, ReduxState } from "../../interfaces";

export interface FavoriteMoviesReduxState extends Pick<ReduxState, 'action'> {
  result: MovieObject[];
}

export interface FavoriteMoviesReduxAction extends Pick<ReduxAction, 'type'> {
  data: MovieObject | null;
}