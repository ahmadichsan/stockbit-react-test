import React from 'react';
import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import ContainerLayout from './ContainerLayout';
import { initialStateFavoriteMovies } from '../../redux';

const mockStore = configureMockStore();
const store = mockStore({ favoriteMovies: initialStateFavoriteMovies });

const Component = () => (
  <BrowserRouter>
    <Provider store={store}>
      <ContainerLayout />
    </Provider>
  </BrowserRouter>
);

it('renders without crashing', () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(<Component />, div);
});
