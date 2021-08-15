import 'dotenv/config';

import { MovieObject, ReduxAction, ReduxState, SweetAlertConfig } from '../interfaces';

export * from './MovieAPI';

export const initialState: ReduxState = {
  fetch: false, // set to true/false if its related with api call
  payload: null, // payload here
  result: null, // response for success action here. if not related to API cal, put value here
  error: '', // response for failed action here
  action: '',
};

export const initialAction: ReduxAction = {
  type: 'DEFAULT',
  data: null,
};

export const companyName = 'Company Name';

export const defaultSweetAlertConfig: SweetAlertConfig = {
  type: 'default',
  title: 'Example Title',
  children: 'Example Message Alert',
};

// export const defaultSweetAlertState: AlertState = {
//   ...initialState,
//   data: { ...defaultSweetAlertConfig },
// };

export const defaultErrorAlertConfig: SweetAlertConfig = {
  type: 'error',
  title: 'Error',
  children: 'Error',
  confirmBtnText: 'Dismiss',
  confirmBtnBsStyle: 'warning',
};

export const defaultWarningAlertConfig: SweetAlertConfig = {
  type: 'warning',
  title: 'Attention!',
  children: 'Are you sure to execute this action? This action cannot be undone.',
};

export const defaultInfoAlertConfig: SweetAlertConfig = {
  type: 'info',
  title: 'Information',
  children: 'Information Alert',
};

export const defaultUnauthorizedAlertConfig: SweetAlertConfig = {
  type: 'error',
  title: 'Attention!',
  children: 'You are restricted to this data or action',
};

export const defaultLoadingAlertConfig: SweetAlertConfig = {
  type: 'info',
  title: 'Initialize...',
  children: 'Please wait a moment',
};

export const defaultSuccessAlertConfig: SweetAlertConfig = {
  type: 'success',
  title: 'Congratulation!',
  children: 'Action Success!',
};

export const internetConnectionProblem = 'There is an internet connection problem, please try again later.';
export const resTimeout = 'Server is taking too long to respond. This can be caused by poor connectivity or an error in our server. Please try again later';

export const fetchTimeout = 60000;

export const defaultMovieObject: MovieObject = {
  adult: false,
  backdrop_path: '',
  genre_ids: [],
  id: 0,
  original_language: '',
  original_title: '',
  overview: '',
  popularity: 0,
  poster_path: '',
  release_date: '',
  title: '',
  video: false,
  vote_average: 0,
  vote_count: 0,
};
