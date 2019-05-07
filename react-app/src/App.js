import React, { Component } from 'react';
import {ChatManager, TokenProvider} from '@pusher/chatkit-client';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import './App.css';

import { tokenUrl, instanceLocator } from './config';



class App extends React.Component {

  constructor() {
    super()
    this.state = {
      messages: []
    }
  this.sendMessage = this.sendMessage.bind(this)
  this.userId = 'Trevorton';
  this.roomId = '19396680';
  }

  componentDidMount() {

    console.log("componentDidMount function fired :-)");

    const tokenProvider = new TokenProvider({
      url: tokenUrl
    });
    const chatManager = new ChatManager({
        instanceLocator,
        userId: this.userId,
        tokenProvider: tokenProvider
    });
   



    chatManager.connect()
    .then(currentUser => {
      this.currentUser = currentUser
      this.currentUser.subscribeToRoom({
        roomId: this.roomId,
        hooks: {
          onNewMessage: message => {
            console.log('message.text: ', message.parts);
            this.setState({
              messages: [ ...this.state.messages, message.parts]
            })
          }
        }
      });
      
    })

    chatManager.connect()
  .then(currentUser => {
    console.log('Successful connection', currentUser)
  })
  .catch(err => {
    console.log('Error on connection', err)
  })
  }

  sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId: this.roomId
    })
    .then(message =>{
    this.currentUser.fetchMultipartMessages({
      roomId: this.roomId,
      limit: 10
    })
    .then(messages => {
        console.log('All messages ', messages);
        // do something with the messages
        var formattedMessages = messages.map(message => {
          return { 
            senderId: message.senderId, 
            text: message.parts[0].payload.content
          };
        });
        this.setState({
          messages: formattedMessages
        })
      })
  });
}

  render() {
    return (
      <div className="App">
        <MessageList messages={this.state.messages} />
        <SendMessageForm sendMessage={this.sendMessage} />
      </div>
    )
  }
}
  


export default App