import React from 'react';
import { observer, inject } from 'mobx-react';
import styles from './Preview.module.scss';
import arrow from '../../images/preview-arrow.svg'; // Tell Webpack this JS file uses this image

class Preview extends React.Component {
  // componentIsOpen = this.props.previewStore.open ? 'open' : 'closed';
  render() {
    return (
      <div className={styles.preview + ' ' + `${this.props.previewStore.open ? styles.open : styles.closed}`}>
        <button onClick={() => this.props.previewStore.toggleOpen()}>
          <img src={arrow} />
        </button>
        <div>
        <p>Your URL</p>
          <p>{this.props.projectStore.url}</p>
          <p>Your Name</p>
          <p>{this.props.projectStore.name}</p>
        </div>
      </div>
    );
  }
}

export default inject(
    'previewStore',
    'projectStore'
    )(observer(Preview))
