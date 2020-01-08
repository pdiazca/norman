import React from 'react';
import NextButton from '../NextButton'
import BackButton from '../BackButton'
import ColourCards from '../ColourCards'
import { observer, inject } from 'mobx-react';
import styles from './SecondaryColour.module.scss';

class Second extends React.Component {  
  addSecondaryColour = (e) => {
    this.props.projectStore.setSecondaryColour(e.target.dataset.colour);
  }

  pickRandom = () => {
    let colours = this.props.scraperStore.secondaryColours.slice(0, 5);
    let randomItem = colours[Math.floor(Math.random()*colours.length)];

    this.props.projectStore.setSecondaryColour(randomItem)
  }

  render() {
    return (
      <div className={styles.secondaryColour}>
        <h1>Now Let's add some <span>colour</span> to your text!</h1>
        <p>Based on your selection I've found these options for you.</p>
          <ColourCards 
            colour={this.props.scraperStore.secondaryColours}
            selectedColour={this.props.projectStore.secondaryColour}
            addBgColour={this.addSecondaryColour.bind(this)}/>
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