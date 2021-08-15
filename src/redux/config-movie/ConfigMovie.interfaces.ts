import { ConfigMovies, ReduxAction, ReduxState } from "../../interfaces";

export interface ConfigMovieReduxState extends Omit<ReduxState, 'result'> {
  result?: ConfigMovies | null;
}

export interface ConfigMovieReduxAction extends Omit<ReduxAction, 'data'> {
  data?: ConfigMovies | null;
  error?: string;
}