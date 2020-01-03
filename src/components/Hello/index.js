import React from 'react';
import NextButton from '../NextButton';
import { observer, inject } from 'mobx-react';
import styles from './Hello.module.scss';

class Hello extends React.Component {

  render() {
    return (
      <div className={styles.hello}>
          <h1>Hi, Im <span>Norman</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
          <input type="text" placeholder="what's your website url?"/>
          <NextButton />
      </div>
    );
  }
}
export default inject(
  'projectStore', 
  'componentStore'
  )(observer(Hello))