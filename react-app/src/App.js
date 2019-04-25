import React, { Component } from 'react';
import {ChatManager, TokenProvider} from '@pusher/chatkit-client';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import RoomList from './components/RoomList';
import NewRoomForm from './components/NewRoomForm';
import './App.css';

import { tokenUrl, instanceLocator } from './config';



class App extends Component {

  componentDidMount() {

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
      currentUser.subscribeToRoom({
        roomId: 19396680,
        hooks: {
          onNewMessage: message => {
            console.log('message.text: ', message.text);
          }
        }
      })
    })
  }
  render() {
    return (
      <div className="App">
        <MessageList />
      </div>
    );
  }
}

export default App;
