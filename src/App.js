import React from 'react';
import { observer, inject } from 'mobx-react'
import Hello from './components/Hello'
import First from './components/First'
import Second from './components/Second'
import Preview from './components/Preview'
import './App.scss';

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
        <Preview />
      </div>
    );
  }
}
export default inject(
  'projectStore', 
  'componentStore'
)(observer(App))