/* @flow */
import React from 'react';

type Foo = {foo:string};

class B extends React.Component {
  props:Foo;

  render() : React.Element {
    return <h1>{this.props.foo}</h1>;
  }
}
