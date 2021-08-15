import React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './LandingPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const Component = () => (
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>
  );
  ReactDOM.render(<Component />, div);
});
