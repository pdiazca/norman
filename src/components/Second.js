import React from 'react';
import BackButton from './BackButton'
import { observer, inject } from 'mobx-react'

class Second extends React.Component {
  render() {
    return (
      <div>
          <p>Name: {this.props.projectStore.name}</p>
          <BackButton />
      </div>
    );
  }
}
export default inject('projectStore')(observer(Second))