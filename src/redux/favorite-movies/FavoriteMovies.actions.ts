import { MovieObject } from "../../interfaces";

export const FAVORITE_MOVIES_ADD = 'FAVORITE_MOVIES_ADD';
export const FAVORITE_MOVIES_REMOVE = 'FAVORITE_MOVIES_REMOVE';

export const favoriteMoviesAdd = (data: MovieObject) => ({ type: FAVORITE_MOVIES_ADD, data });
export const favoriteMoviesRemove = (data: MovieObject) => ({ type: FAVORITE_MOVIES_REMOVE, data });
