import React from 'react';
import { observer, inject } from 'mobx-react'
import styles from './BackButton.module.scss';

class BackButton extends React.Component {
  render() {
    return (
      <div>
        <button data-count={this.props.componentStore.viewCount} onClick={e => this.props.componentStore.getPrev(e)}>Back</button>
      </div>
    );
  }
}
export default inject('componentStore')(observer(BackButton))