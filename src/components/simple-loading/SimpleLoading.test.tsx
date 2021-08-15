import React from 'react';
import * as ReactDOM from 'react-dom';
import SimpleLoading from './SimpleLoading';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SimpleLoading />, div);
});
