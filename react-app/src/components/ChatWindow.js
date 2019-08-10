import React, { Component } from 'react';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';

export default class ChatWindow extends Component {
    render() {

        const containerStyle = { overflowY: "auto", height: "500px" };

        return (
            <div className="container">
          <div className="spacer">
         <div className="row">
           <div className="col-3"></div>
              <div className="chat-window col-6">
                  <div className="chat-window-wrapper" style={ containerStyle } >
                    <MessageList messages={this.state.messages} currentUser={this.state.currentUser}/> 
                  </div> 
                  <div>
                    <SendMessageForm getMessages={this.getMessages} sendMessage={this.sendMessage} />
                  </div>
              </div>
              <div className="col-3"></div>
            </div>
            </div>
        </div>
        )
    }
}
