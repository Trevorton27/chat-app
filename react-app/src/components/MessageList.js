import React from 'react';
import Message from './Message';





class MessageList extends React.Component {

  

  render() {
    
        return (
          <div className="container">
            <div className="message-list">
              {this.props.messages.map((message, index) => {
                const messageComponent = <Message className="col" key={index} username={message.username} text={message.text} />;
             
                if(message.username === 'SomeGuy') {
                  return (
                    <div className="row">
                      <div className="col"></div>
                      {messageComponent}
                    </div>
                  );
                } 
                  return (
                    <div className="row">
                      {messageComponent}
                      <div className="col"></div>
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