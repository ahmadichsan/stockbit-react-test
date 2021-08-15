//  Region Import External Lib (e.g React, Reactstrap, etc)
import React from 'react';

//  Region Import Constants

//  Region Import Interfaces
import { ExampleProps } from './Example.interfaces';
//  Region Import Redux Action Type and Redux Action

//  Region Import Helper Function

//  Region Import Custom Hook

//  Region Import Components/Cards

//  Region Import Assets

//  Region Import Style
import './Example.scss';

export default function Example(props: ExampleProps) {
  return (
    <div>
      Component {props.title}
    </div>
  );
}
