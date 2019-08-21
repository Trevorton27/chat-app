import React from 'react';
import Message from './Message';

class MessageList extends React.Component {
  constructor() {
    super()
    this.state = {
      messages: [],
      currentUser: {
        username: null,
        id: null
      }
    }
  }
  render() {
    
        return (
          <div className="container">
            <div className="message-list">
              
              {this.state.messages.map((message, index) => {
                const messageComponent = <Message className="message-component" key={index} username={message.username} text={message.text} />;
             
                if(message.username === this.state.currentUser.username) {
                  return (
                    <div className="message row">
                      <div className="bg col-6"></div>
                     <div className="bg col-6" > {messageComponent} </div>
                    </div>
                  );
                } 
                  return (
                    <div className="message row">
                      <div className="bg col-6" >{messageComponent}</div>
                      <div className="bg col-6"></div>
                    </div>
                  );
                })
              }
            </div>   
          </div>
        );
    }
}

export default MessageList;