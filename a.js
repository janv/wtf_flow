/* @flow */
import React from 'react';
import B from './b';

class A extends React.Component {
  render() : React.Element {
    return <B foo={1}></B>;
  }
}

