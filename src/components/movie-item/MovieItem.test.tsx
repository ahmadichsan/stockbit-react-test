import React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';

import { defaultMovieObject } from '../../constants';

import MovieItem from './MovieItem';

const mockStore = configureMockStore();
const store = mockStore({ });

const Component = () => (
  <BrowserRouter>
    <Provider store={store}>
      <MovieItem data={defaultMovieObject} isPosterMode setIsPosterMode={jest.fn} />
    </Provider>
  </BrowserRouter>
);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Component />, div);
});
