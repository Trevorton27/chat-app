import React from 'react';
import Message from './Message';

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
                    <Message key={index} username={message.senderId} text={message.text} />
                  )
              })}
            </div>
        )
    }
}

export default MessageList;