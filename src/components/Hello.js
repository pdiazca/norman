import React from 'react';
import NextButton from './NextButton'
import { observer, inject } from 'mobx-react'

class Hello extends React.Component {

  render() {
    return (
      <div>
          <p>Hello Im Norman</p>
          <NextButton />
      </div>
    );
  }
}
export default inject(
  'projectStore', 
  'componentStore'
  )(observer(Hello))