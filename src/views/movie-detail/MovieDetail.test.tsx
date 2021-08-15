import React from 'react';
import * as ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

import MovieDetail from './MovieDetail';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();
const store = mockStore({});

it('renders without crashing', () => {
  window.scrollTo = jest.fn();

  const div = document.createElement('div');
  const Component = () => (
    <BrowserRouter>
      <Provider store={store}>
        <MovieDetail />
      </Provider>
    </BrowserRouter>
  );
  ReactDOM.render(<Component />, div);
});
