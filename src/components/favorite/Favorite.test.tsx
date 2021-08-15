import React from 'react';
import * as ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { defaultMovieObject } from '../../constants';

import Favorite from './Favorite';
import { initialStateFavoriteMovies } from '../../redux';

const mockStore = configureMockStore();
const store = mockStore({ favoriteMovies: initialStateFavoriteMovies });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Favorite
        data={defaultMovieObject}
      />
    </Provider>,
    div);
});
