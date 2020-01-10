import React from 'react';
// import BackButton from '../BackButton'
// import NextButton from '../NextButton'
import { observer, inject } from 'mobx-react'
import styles from './Logo.module.scss';

class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      placeheolder: "Name",
      nextDisabled: true
    }
  }

  componentDidMount() {
    if(this.props.projectStore.name) {
      this.setState({
        placeholder: this.props.projectStore.name,
        nextDisabled: false
      })
    }
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  testFunc() {
    this.props.projectStore.setName(this.state.value)

    this.props.componentStore.getNext()
  }

  render() {
    const logo = this.props.scraperStore.logo;
    return (
      <div className={styles.logo}>
      <h1>Thanks! Let's start with your <span>logo.</span></h1>
      {logo ?
        <div>
          <p>Is this the logo you would like to use?</p>
            <div className={styles.logoImageContainer}>
              <img src={logo} alt="logo" />
            </div>
            <div className={styles.buttonContainer}>
              <button className="btn-secondary">No, try again</button>
              <button>Yes, that's my logo!</button>
            </div>
        </div> 
        : <p>We couldn't seem to find your logo</p> }

        <p>I would like to <a className="link-blue">upload my logo</a></p>
        
          {/* <input type="text" placeholder={this.state.placeholder} onChange={this.onChange.bind(this)} defaultValue={this.props.projectStore.name ? this.props.projectStore.name : ""} /> */}
          {/* <button type="button" onClick={this.testFunc.bind(this)} className="calculate-btn">Set Name</button> */}
          {/* <NextButton disabled={this.state.nextDisabled}/> */}
          {/* <BackButton /> */}
      </div>
    );
  }
}
export default inject(
  'projectStore', 
  'componentStore',
  'scraperStore'
  )(observer(Logo))