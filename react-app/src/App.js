import React from 'react';
import ChatWindow from './components/ChatWindow';
import About from './components/About';
import './App.css';
import axios from 'axios';
import {Route, Link, BrowserRouter as Router } from 'react-router-dom';



class App extends React.Component {

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
    

    return (
      <div>
        <Router>
          <nav className="navbar navbar-dark bg-primary">
              <ul className="nav nav-tabs justify-content-center">
                <li className="nav-item active">
                  <Link to="/About">About</Link>
                </li>
                <li className="nav-item active">
                  <Link to="/ChatWindow">Chat</Link>
                </li>
              </ul>
            </nav>
              <Route path="/ChatWindow" component={ChatWindow} sendMessage={this.state.sendMessage} getMessages={this.state.getMessages} />
              <Route path="/About" component={About} />
              <div className="card-footer text-center">
                <div className="card-body">
                  <p className="card-title1" id="para">Psst. Click the button below to visit my personal website.</p>
                  <a id="footer-button" href="https://trevormearns.com/" type="button" className="btn1 btn-primary">Click Me.</a>
                </div>      
            </div>
        </Router>
            
      </div>
      
        
      
     
    
    )
  }
}
  


export default App