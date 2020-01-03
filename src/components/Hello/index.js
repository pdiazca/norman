import React from 'react';
import { observer, inject } from 'mobx-react';
import styles from './Hello.module.scss';

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
    
    if(this.props.projectStore.setUrl(this.state.url)) {
      this.props.componentStore.getNext();
    };
  }

  render() {
    return (
      <div className={styles.hello}>
          <h1>Hi, Im <span>Norman</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
          <input type="text" placeholder="what's your website url?" onChange={this.setUrl.bind(this)} />
          <button onClick={this.getResults.bind(this)}>Ready!</button>
      </div>
    );
  }
}
export default inject(
  'scraperStore',
  'projectStore', 
  'componentStore'
  )(observer(Hello))
