import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <h1>About This App</h1>
                <p>This chat app was built by Trevor Mearns as part of a software development course.</p>
                <p>It uses Python with Flask as a backend server and React for the front end.</p>
                <p>All messages are stored and retrieved using a PostgresQL database to which the app connects via the Psycopg2 library.</p>
            </div>
        )
    }
}
