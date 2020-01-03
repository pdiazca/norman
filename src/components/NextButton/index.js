import React from 'react';
import { observer, inject } from 'mobx-react';
import styles from './NextButton.module.scss';

class NextButton extends React.Component {
  render() {
    return (
      <div>
        <button 
          data-count={this.props.componentStore.viewCount} 
          onClick={e => this.props.componentStore.getNext(e)}
          disabled={this.props.disabled}>Start Designing!</button>
      </div>
    );
  }
}

export default inject(
  'componentStore',
)(observer(NextButton))