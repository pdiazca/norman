import React from 'react';
import { observer, inject } from 'mobx-react';
import styles from './Loader.module.scss';

class Loader extends React.Component {
  render() {
    return (
      <div className={styles.loadingContainer}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }
}

export default inject(
  'loadingStore',
)(observer(Loader))