import { ConfigMovies } from "../../interfaces";

export const CONFIG_MOVIES_FETCH = 'CONFIG_MOVIES_FETCH';
export const CONFIG_MOVIES_SUCCESS = 'CONFIG_MOVIES_SUCCESS';
export const CONFIG_MOVIES_FAILED = 'CONFIG_MOVIES_FAILED';

export const configMoviesFetch = () => ({ type: CONFIG_MOVIES_FETCH });
export const configMoviesSuccess = (data: ConfigMovies) => ({ type: CONFIG_MOVIES_SUCCESS, data });
export const configMoviesFailed = (error: string) => ({ type: CONFIG_MOVIES_FAILED, error });

