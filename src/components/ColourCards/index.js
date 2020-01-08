import React from 'react';
import styles from './ColourCards.module.scss';

class ColourCards extends React.Component {
  render() {
    const listItems = this.props.colour.slice(0, 5).map((colour, id) =>
      <button 
        key={id} 
        onClick={this.props.addBgColour} 
        data-colour={colour}
        className={this.props.selectedColour === colour ? styles.colourChooser + " " + styles.active : styles.colourChooser}
        style={{backgroundColor: colour }}>
        <span>{colour}</span>
      </button>
    );

    return (
      <div>
        <ul className={styles.colourList}>
          {listItems}
        </ul>
      </div>
    );
  }
}

export default ColourCards
