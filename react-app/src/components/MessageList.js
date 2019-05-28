import React from 'react';
import Message from './Message';
import axios from 'axios';


class MessageList extends React.Component {

    getMessages() {
        console.log('sendMessage function was run');
        this.setState(
         axios.get('/api/messages').then(function (response) {
           console.log(response);
         })
          )
      }

    render() {
        return (
            <div className="message-list">
              {this.props.messages.map((message, index) => {
                  return (
                    <Message key={index} username={message.senderId} text={message.text} />
                  )
              })}
            </div>
        )
    }
}

export default MessageList;