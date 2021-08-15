import React from 'react';
import * as ReactDOM from 'react-dom';
import ReactTooltipWrapper from './ReactTooltipWrapper';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReactTooltipWrapper />,div);
});
