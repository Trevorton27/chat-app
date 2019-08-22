import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div id="about" className="d-flex flex-column">
                        
                            <h1 className="about-title">About This App</h1>
                            <p>This chat app was built by Trevor Mearns as part of a software development course under the tutelage of Andy Sterkowitz.
                            It uses Python with Flask as a backend server and React for the front end.
                            All messages are stored and retrieved using a PostgresQL database to which the app connects via the Psycopg2 library.</p>
                            <p>Click on the "Chat" link in the menu above to give er' a go.</p>
                        </div>
                    </div>
                </div> 
        )
    }
}
