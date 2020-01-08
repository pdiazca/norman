import React from 'react';
import NextButton from '../NextButton'
import BackButton from '../BackButton'
import { observer, inject } from 'mobx-react';
import styles from './Second.module.scss';

class Second extends React.Component {  
  addBgColour = (e) => {
    this.props.projectStore.setPrimaryColour(e.target.dataset.colour);
  }

  pickRandom = () => {
    let colours = this.props.scraperStore.primaryColours.slice(0, 5);
    let randomItem = colours[Math.floor(Math.random()*colours.length)];

    this.props.projectStore.setPrimaryColour(randomItem)
  }

  render() {
    const listItems = this.props.scraperStore.primaryColours.slice(0, 5).map((colour, id) =>
      <button 
        key={id} 
        onClick={this.addBgColour.bind(this)} 
        data-colour={colour}
        className={this.props.projectStore.primaryColour === colour ? styles.colourChooser + " " + styles.active : styles.colourChooser}
        style={{backgroundColor: colour }}>
        <span>{colour}</span>
      </button>
    );

    return (
      <div className={styles.second}>
        <h1>Great! let's add some <span>colour.</span></h1>
        <p>I've found a few options I think would work well with your brand. <br />Which one feels best for you?</p>
          <ul className={styles.colourList}>
            {listItems}
          </ul>
        <BackButton />
        <NextButton />
        <p>I'd like <button className={styles.blueText} onClick={this.pickRandom.bind(this)}>you choose for me</button></p>
      </div>
    );
  }
}
export default inject(
  'projectStore',
  'scraperStore'
  )(observer(Second))