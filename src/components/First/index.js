import React from 'react';
import BackButton from '../BackButton'
import NextButton from '../NextButton'
import { observer, inject } from 'mobx-react'
import styles from './First.module.scss';

class First extends React.Component {
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
    return (
      <div className={styles.first}>
      <h1>Thanks! Let's start with your <span>logo.</span></h1>
        <p>Is this the logo you would like to use?</p>
          <input type="text" placeholder={this.state.placeholder} onChange={this.onChange.bind(this)} defaultValue={this.props.projectStore.name ? this.props.projectStore.name : ""} />
          <button type="button" onClick={this.testFunc.bind(this)} className="calculate-btn">Set Name</button>
          <NextButton disabled={this.state.nextDisabled}/>
          <BackButton />
      </div>
    );
  }
}
export default inject(
  'projectStore', 
  'componentStore'
  )(observer(First))