from flask import Flask, jsonify
from flask_restful import Api, Resource, reqparse
from database_service import open_connection, get_users, get_messages, post_message
from flask import render_template

app = Flask(__name__,
    static_folder="react-app/build/static",
    template_folder="react-app/build"
    )

@app.route('/')
def index():
    return render_template('index.html')

print('Starting Flask. Yay!')

@app.route('/api/users')
def get_users_endpoint():
    users = get_users()
    return jsonify(users)

@app.route('/api/messages')
def get_messages_endpoint():
    messages = get_messages()
    return jsonify(messages)
    print(messages)

@app.route('/api/messages')
def post_message_endpoint():
    message = post_message()
    return jsonify(message)
    print(message)

    
if __name__ == "__main__":
    app.run()