import React from 'react';
import NextButton from './NextButton'
import { observer, inject } from 'mobx-react'

class Hello extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: ""
    };
  }

  setUrl(e) {
    this.setState({
      url: e.target.value
    })
  }

  getResults() {
    this.props.scraperStore.getScraperResults(this.state.url);
    this.props.projectStore.setUrl(this.state.url);
  }

  render() {
    return (
      <div>
          <p>Hello Im Norman</p>
          <input placeholder="URL" onChange={this.setUrl.bind(this)} />
          <button onClick={this.getResults.bind(this)}>Ready!</button>
          {/* <NextButton /> */}
      </div>
    );
  }
}
export default inject(
  'scraperStore',
  'projectStore', 
  'componentStore'
  )(observer(Hello))