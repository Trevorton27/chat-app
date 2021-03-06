import React, { Component } from 'react';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';
import axios from 'axios';

export default class ChatWindow extends Component {

  constructor() {
    super()
    this.state = {
      messages: [],
      currentUser: {
        username: null,
        id: null
      }
    }
  this.getMessages = this.getMessages.bind(this);
  this.sendMessage = this.sendMessage.bind(this);
  }

componentDidMount() {
  let userId = localStorage.getItem('chat-user-id');

  if (userId !== null) {
    axios.get('api/users?user_id=' + userId)
      .then((response) => {
        console.log('response: ', response);
        this.setState({
          currentUser: response.data
        })
      })
  } else {
    var username = prompt('Please enter a username', " ");

    axios.post('/api/users', {
        username
      })
      .then(response => {
        localStorage.setItem('chat-user-id', response.data);
        console.log('response: ', response);
        this.setState({
          currentUser: {
            username: username,
            id: response.data
          }
        });
      });
  }
 
  this.getMessages();
}

sendMessage(message) {
    return axios.post('/api/messages', {
     user_id: this.state.currentUser.id,
     text: message
    }); 
}

getMessages() {
  axios.get('/api/messages').then((response) => {
    console.log(response.data);
    this.setState({
      messages: response.data
    });
  });
  }
    render() {

        const containerStyle = { overflowY: "auto", height: "500px" };

        return (
            <div className="container">
          <div className="spacer">
         <div className="row">
           <div className="col-3"></div>
              <div className="chat-window col-6">
                  <div className="chat-window-wrapper" style={ containerStyle } >
                    <MessageList getMessages={this.state.getMessages} messages={this.state.messages} currentUser={this.state.currentUser}/> 
                  </div> 
                  <div>
                    <SendMessageForm sendMessage={this.sendMessage} />
                  </div>
              </div>
              <div className="col-3"></div>
            </div>
            </div>
        </div>
        )
    }
}
