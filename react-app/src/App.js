import React from 'react';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import './App.css';
import axios from 'axios';


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      messages: []
    }
  this.getMessages = this.getMessages.bind(this)

  }

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
      <div className="App">
        <MessageList messages={this.state.messages} />
        <SendMessageForm sendMessage={this.sendMessage} />
      </div>
    )
  }
}
  


export default App