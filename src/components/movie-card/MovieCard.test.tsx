import React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';

import { defaultMovieObject } from '../../constants';

import MovieCard from './MovieCard';

const mockStore = configureMockStore();
const store = mockStore({  });

it('renders without crashing', () => {
  const div = document.createElement('div');
  const Component = () => (
    <BrowserRouter>
      <Provider store={store}>
        <MovieCard data={defaultMovieObject} />
      </Provider>
    </BrowserRouter>
  );

  ReactDOM.render(<Component />, div);
});
