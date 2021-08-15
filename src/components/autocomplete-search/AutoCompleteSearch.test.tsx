import React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AutoCompleteSearch from './AutoCompleteSearch';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const Component = () => (
    <BrowserRouter>
      <AutoCompleteSearch />
    </BrowserRouter>
  );
  ReactDOM.render(<Component />, div);
});
