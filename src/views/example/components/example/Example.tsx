import React from 'react';
import { ExampleProps } from './Example.interfaces';
import './Example.scss';

export default function Example(props: ExampleProps) {
  return (
    <div>
      Example Component {props.title}
    </div>
  );
}
