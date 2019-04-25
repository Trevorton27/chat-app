import React, { Component } from 'react';
import {ChatManager, TokenProvider} from '@pusher/chatkit-client';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import RoomList from './components/RoomList';
import NewRoomForm from './components/NewRoomForm';
import './App.css';

import { tokenUrl, instanceLocator } from './config';



class App extends Component {

  constructor() {
    super()
    this.state = {
      messages: []
    }
  }

  componentDidMount() {

    console.log("componentDidMount function fired :-)");

    const tokenProvider = new TokenProvider({
      url: tokenUrl
    });
    const chatManager = new ChatManager({
        instanceLocator,
        userId: 'Trevorton',
        tokenProvider: tokenProvider
    });
   



    chatManager.connect()
    .then(currentUser => {
      currentUser.subscribeToRoomMultipart({
        roomId: '19396680',
        hooks: {
          onNewMessage: message => {
            console.log('message.text: ', message.parts);
            this.setState({
              messages: [ ...this.state.messages, message.parts]
            })
          }
        }
      })
    })

    chatManager.connect()
  .then(currentUser => {
    console.log('Successful connection', currentUser)
  })
  .catch(err => {
    console.log('Error on connection', err)
  })
  }

  render() {
    console.log('this.state.messages: ', this.state.messages);
    return (
      <div className="App">
        <MessageList messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
