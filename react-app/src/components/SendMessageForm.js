import React from 'react';

class SendMessageForm extends React.Component {
    constructor() {
        super()
        this.state = {
            message: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        console.log(this.state.message)
        this.setState({
            message: e.target.value
        })
    }

   handleSubmit(e) {
        e.preventDefault()
        this.props.sendMessage(this.state.message)
        .then(response => {
            console.log(response);
            this.props.getMessages();
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    render() {
        return (
            <form 
            onSubmit={this.handleSubmit}
            className="send-message-form">
                <input className="input-field"
                    onChange={this.handleChange}
                    value={this.state.message}
                    placeholder="Type your message and hit enter"
                    type="text" />
            </form>

        )
    }
}

export default SendMessageForm