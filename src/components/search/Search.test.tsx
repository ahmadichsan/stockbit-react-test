import React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Search from './Search';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const Component = () => (
    <BrowserRouter>
      <Search />
    </BrowserRouter>
  );
  ReactDOM.render(<Component />, div);
});
