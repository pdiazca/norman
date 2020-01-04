import React from 'react';
import { observer, inject } from 'mobx-react';
import styles from './Message.module.scss';

class Message extends React.Component {
  render() {
    let messageType;

    switch(this.props.messageStore.messageType) {
      case "success":
        messageType = styles.alertSuccess
      break;
      case "error":
        messageType = styles.alertError
      break;
      case "warning":
        messageType = styles.alertWarning
      break;
      default:
        messageType = styles.alertWarning
    }
    
    return (
      <div className={messageType}>
        <p>{this.props.messageStore.message}</p>
      </div>
    );
  }
}

export default inject(
  'messageStore',
)(observer(Message))