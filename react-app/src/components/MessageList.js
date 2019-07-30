import React from 'react';
import Message from './Message';
import axios from 'axios';





class MessageList extends React.Component {

  axios.get('api/users?user_id=' + userId)
  .then((response) => {
    this.setState({
      currentUser: response.data
    })
  })
  
  render() {
    
        return (
          <div className="container">
            <div className="message-list">
              {this.props.messages.map((message, index) => {
                const messageComponent = <Message className="col" key={index} username={message.username} text={message.text} />;
                const currentUser = localStorage.setItem('chat-user-id', response.data.userId)
                this.setState({
                  currentUser: {
                    username: username,
                    id: response.data
                  }
                });
                if(message.username === currentUser) {
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