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
    axios.get('api/users?user_id=' + userId)
    .then((response) => {
      this.setState({
        currentUser: response.data.user
      })
    })
    console.log('user ID didnt come back null');
   
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
          id: response.data.userId
        }
      });
    });    
}
 

  


 
}

sendMessage(message) {
    return axios.post('/api/messages', {
     user_id: this.state.currentUser.Id,
     
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
    return (
      <div className="App">
        <MessageList messages={this.state.messages} />
        <SendMessageForm getMessages={this.getMessages} sendMessage={this.sendMessage} />
      </div>
    )
  }
}
  


export default App