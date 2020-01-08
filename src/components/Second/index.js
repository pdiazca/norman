import React from 'react';
import NextButton from '../NextButton'
import BackButton from '../BackButton'
import ColourCards from '../ColourCards'
import { observer, inject } from 'mobx-react';
import styles from './Second.module.scss';

class Second extends React.Component {  
  addPrimaryColour = (e) => {
    this.props.projectStore.setPrimaryColour(e.target.dataset.colour);
  }

  pickRandom = () => {
    let colours = this.props.scraperStore.primaryColours.slice(0, 5);
    let randomItem = colours[Math.floor(Math.random()*colours.length)];

    this.props.projectStore.setPrimaryColour(randomItem)
  }

  render() {

    return (
      <div className={styles.second}>
        <h1>Great! let's add some <span>colour.</span></h1>
        <p>I've found a few options I think would work well with your brand. <br />Which one feels best for you?</p>
        <ColourCards 
          colour={this.props.scraperStore.primaryColours}
          selectedColour={this.props.projectStore.primaryColour}
          addBgColour={this.addPrimaryColour.bind(this)}/>
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