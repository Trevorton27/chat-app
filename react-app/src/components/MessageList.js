import React from 'react';

const DUMMY_DATA = [
    {
        senderId: 'Trevorton',
        text: 'Suuuuuuup.'
    },
    {
        senderId: 'The Man Bat',
        text: 'Can it possibly be?'   
    },
    {
        senderId: 'Bruce Lee',
        text: 'Whaaa!'
    }
]

class MessageList extends React.Component {
    render() {
        return (
            <div className="message-list">
              {this.props.messages.map((message, index) => {
                  return (
                      <div key={index} className="message">
                        <div className="message-text">{message.senderId}</div>
                        <div className="message-username">{message.text}</div>
                        
                      </div>
                  )
              })}
            
            </div>
        )
    }
}

export default MessageList;