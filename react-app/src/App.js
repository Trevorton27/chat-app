import React, { Component } from 'react';
//import Chatkit from '@pusher/chatkit';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import RoomList from './components/RoomList';
import NewRoomForm from './components/NewRoomForm';
import './App.css';

import { tokenURL, instanceLocator } from './config';



class App extends Component {

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
        instanceLocator,
        userId: 'Trevorton'
    })
   const tokenProvider = new Chatkit.TokenProvider({
      url: tokenURL
  })



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
