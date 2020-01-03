import React from 'react';
import { observer, inject } from 'mobx-react'

class Preview extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.previewStore.toggleOpen()}>{this.props.previewStore.buttonText}</button>
        <div style={{display: this.props.previewStore.open ? 'block' : 'none' }}>
          <p>Your URL</p>
          <p>{this.props.projectStore.url}</p>
          <p>Your Name</p>
          <p>{this.props.projectStore.name}</p>
        </div>
      </div>
    );
  }
}

export default inject(
    'previewStore',
    'projectStore'
    )(observer(Preview))