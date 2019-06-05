import React from 'react';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import './App.css';
import axios from 'axios';


class App extends React.Component {

  constructor() {
    console.log('app.js was constructed');
    super()
    this.state = {
      messages: []
    }
  this.getMessages = this.getMessages.bind(this)
  }

  componentDidMount() {
    console.log('componentDidMount');
    console.log('outer this', this);
    axios.get('/api/messages').then((response) => {
      console.log(response.data);
      console.log('inner this', this);
      this.setState({
        messages: response.data
      });
    });
  }
  
postMessage() {
  console.log('postMessage function was run. All good in the hood')
  axios.post('/api/messages', {
   id: 3,
   text: 'Test message post'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

  getMessages() {
    console.log('getMessages function was run');
      
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