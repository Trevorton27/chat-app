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
              {DUMMY_DATA.map((message, index) => {
                  return (
                      <div className="message">
                        <div className="message-username">{message.text}</div>
                        <div className="message-text">{message.senderId}</div>
                      </div>
                  )
              })}
            
            </div>
        )
    }
}

export default MessageList;