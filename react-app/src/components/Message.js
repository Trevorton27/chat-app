import React from 'react';


function Message(props) {
    
        return (
            <div className="message">
                <div className="container">
                    <div className="message-username"> Sent by {props.message.username}: </div>
                    <div className="message-text">{props.message.text}</div>
                </div>
            </div>
        )
    }


export default Message