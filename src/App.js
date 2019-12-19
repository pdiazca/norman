import React from 'react';
import { observer, inject } from 'mobx-react'
import Hello from './components/Hello'
import First from './components/First'
import Second from './components/Second'
import './App.css';

class App extends React.Component {
  render() {
    let component;

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

    return (
      <div className="App">
        {component}
      </div>
    );
  }
}
export default inject(
  'projectStore', 
  'componentStore'
)(observer(App))