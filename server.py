from flask import Flask
from flask import send_from_directory
from flask import render_template
import psycopg2
from database_service import open_connection, get_users, get_messages

app = Flask(__name__,
    static_folder="react-app/build/static",
    template_folder="react-app/build"
    )

@app.route('/')
def index():
    return render_template('index.html')

print('Starting Flask. Yay!')

#@app.route('/api/messages', method=['GET', 'POST'])
#def messages():
    #if GET request
    #return all users
    #users = list()
    #list.append({
    ## "username": "I Am Batman"
    # })
     #return json data for list

    #if POST request
    #create a user
    

#message = open_connection("SELECT * FROM messages;")
message = get_messages()
print(message)

user = get_users()
print(user)

#open_connection("SELECT * FROM users;")
#print(user)


if __name__ == "__main__":
    app.run()