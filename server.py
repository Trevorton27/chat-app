from flask import Flask, jsonify, request, render_template
from flask_restful import Api, Resource, reqparse
from database_service import open_connection, get_users, get_messages, create_message, create_user, get_single_user


app = Flask(__name__,
    static_folder="react-app/build/static",
    template_folder="react-app/build"
    )
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

@app.route('/')
def index():
    return render_template('index.html')

print('Starting Flask. Yay!')

@app.route('/api/users',  methods=['GET', 'POST'])
def get_users_endpoint():
     if request.method == 'POST':

        post_request = request.get_json()
        print(post_request['username'])
        
        user_id = create_user(post_request['username'])
        return jsonify({ 'userID': user_id})
     else:
        query_param = request.args.get('user_id')
        if query_param:
            user = get_single_user(query_param)
            return jsonify(user)
        else:
            users = get_users()
            return jsonify(users)

@app.route('/api/messages', methods=['GET', 'POST'])
def get_messages_endpoint():
    if request.method == 'POST':

        post_request = request.get_json()

        print('post_request %s' % post_request)
        
        message = create_message(post_request['user_id'], post_request['text'])
        return jsonify(message)
    else:
       messages = get_messages()
       return jsonify(messages)


if __name__ == "__main__":
    app.run(debug=True)