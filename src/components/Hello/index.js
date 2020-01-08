import React from 'react';
import { observer, inject } from 'mobx-react';
import styles from './Hello.module.scss';

class Hello extends React.Component {

  constructor(props) {
    super(props);
    this.btn = React.createRef();
    this.state = {
      url: "http://www.amazon.com"
    };
  }

  setUrl(e) {
    if (e.keyCode == 9) {
      this.getResults.bind(this);
    }
    this.setState({
      url: e.target.value
    })
  }  

  async getResults() {
    this.props.loadingStore.toggleLoading(true);

    if(this.state.url === "") {
      this.props.messageStore.displayMessage("error", "Please provide a URL");
      this.props.loadingStore.toggleLoading(false);
    } else {
      const scraperResults = await this.props.scraperStore.getScraperResults(this.state.url);
    
    if(this.props.projectStore.setUrl(this.state.url) && scraperResults) {
      this.props.loadingStore.toggleLoading(false);
      this.props.componentStore.getNext();
    } else if(!scraperResults) {
      this.props.loadingStore.toggleLoading(false);
      this.props.messageStore.displayMessage("error", "Please check your URL");
    }
    }
  }
  
  checkForEnterKey = (e) => {
    if(e.keyCode == 13) {
      this.btn.current.click();
    }
  }

  render() {
    return (
      <div className={styles.hello}>
          <h1>Hi, Im <span>Norman</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
          <input type="text" placeholder="what's your website url?" onChange={this.setUrl.bind(this)} onKeyDown={this.checkForEnterKey}/>
          <button onClick={this.getResults.bind(this)} ref={this.btn}>Ready!</button>
      </div>
    );
  }
}

export default inject(
  'scraperStore',
  'loadingStore',
  'projectStore',
  'messageStore', 
  'componentStore'
  )(observer(Hello))
