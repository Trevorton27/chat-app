import React from 'react';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import './App.css';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBScrollbar } from "mdbreact";


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
  let userId = localStorage.getItem('chat-user-id');

  if (userId !== null) {
    axios.get('api/users?user_id=' + userId)
      .then((response) => {
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

        localStorage.setItem('chat-user-id', response.data.userId)
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
      <MDBContainer >
       < MDBRow className="App">
        <MDBCol md="3"></MDBCol>
            <MDBCol style={ containerStyle } md="6" className="container">
              
                <MessageList messages={this.state.messages} />
                <SendMessageForm getMessages={this.getMessages} sendMessage={this.sendMessage} />
             
            </MDBCol>
          <MDBCol md="3"></MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}
  


export default App