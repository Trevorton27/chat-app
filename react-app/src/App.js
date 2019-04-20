import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chatbox from './Chatbox';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      
      <div className="App">
      <Router>
        <Route path="/Chatbox" component={Chatbox} />
      </Router>
      </div>
    

    );
  }
}

export default App;
