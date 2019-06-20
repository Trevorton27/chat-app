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
  //check local storage for user-id
  let userId = localStorage.getItem('chat-user-id');
  console.log('User ID: ', userId);
  //if a user-id exists in local storage
  if (userId !== null) {
    console.log('user ID didnt come back null');
    this.setState({
      currentUser: {
        id: userId
      }
    })
     //then search db for current user
  } else {
    console.log('user ID came back null');
    //else if no user-id exists in local storage
    //then prompt for username
    var username = prompt('Please enter a username', " ");
    //create new user
    axios.post('/api/users', { username } )
    .then(response => {
      console.log(response);

      //and set current user to newly created user
    localStorage.setItem('chat-user-id', response.data.userID)
      this.setState({
        currentUser: {
          username: username,
          id: response.data.userID
        }
      });
    });    
}
 

  


  axios.get('/api/messages').then((response) => {
    console.log(response.data);
    this.setState({
      messages: response.data
    });
  });
}

sendMessage(message) {
    console.log('postMessage function was run. All good in the hood')
    axios.post('/api/messages', {
     user_id: this.state.currentUser.id,
     text: message
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