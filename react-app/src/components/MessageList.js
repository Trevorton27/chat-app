import React from 'react';
import Message from './Message';
import { MDBContainer } from "mdbreact";




class MessageList extends React.Component {
    
 
  render() {

    const scrollContainerStyle = {width: "100%", maxHeight: "50%" }
        return (
          
            <MDBContainer className="message-list">
              {this.props.messages.map((message, index) => {
                  return (
                    <Message key={index} username={message.username} text={message.text} />
                  )
              })}
            </MDBContainer>
            
            
            
        )
    }
}

export default MessageList;