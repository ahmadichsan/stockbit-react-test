import {
  CONFIG_MOVIES_FAILED,
  CONFIG_MOVIES_FETCH,
  CONFIG_MOVIES_SUCCESS,
} from './ConfigMovie.actions';
import { ConfigMovieReduxAction, ConfigMovieReduxState } from './ConfigMovie.interfaces';

const initialActionConfigMovie: ConfigMovieReduxAction = {
  data: null,
  type: ''
};

const initialStateConfigMovie: ConfigMovieReduxState = {
  action: '',
  error: '',
  fetch: false,
  payload: null,
  result: null,
};

export function configMoviesReducer(
  state: ConfigMovieReduxState = initialStateConfigMovie,
  action: ConfigMovieReduxAction = initialActionConfigMovie
): ConfigMovieReduxState {
  switch (action.type) {
    case CONFIG_MOVIES_FETCH:
      return {
        ...state,
        fetch: true,
        result: null,
        error: '',
        action: action.type,
      };
    case CONFIG_MOVIES_SUCCESS:
      return {
        ...state,
        fetch: false,
        action: action.type,
        result: action.data,
      };
    case CONFIG_MOVIES_FAILED:
      return {
        ...state,
        fetch: false,
        result: null,
        error: action.error,
        action: action.type,
      };

    default:
      return state;
  }
}
