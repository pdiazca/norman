import React from 'react';
import { observer, inject } from 'mobx-react'
import Hello from './components/Hello'
import First from './components/First'
import Second from './components/Second'
import Preview from './components/Preview'
import Loader from './components/Loader'
import Message from './components/Message'
import './App.scss';

class App extends React.Component {
  render() {
    let component;
    let loading;
    let message;

    switch(this.props.componentStore.viewCount) {
      case 1:
        component = <Hello />
        break;
      case 2:
        component = <First />
        break;
      case 3:
        component = <Second />
        break;
      default:
    }

    if(this.props.loadingStore.isLoading) {
      loading = <Loader />
    }

    if(this.props.messageStore.isOpen) {
      message = <Message />
    }
    return (
      <div className="App grid-container">
        {message}
        {loading}
        {component}
        <Preview />
      </div>
    );
  }
}
export default inject(
  'projectStore', 
  'loadingStore',
  'messageStore',
  'componentStore'
)(observer(App))