import psycopg2
from flask_restful import Api, Resource, reqparse

def open_connection(sql_statement):   
    try:
        connection = psycopg2.connect(user = "postgres",
                                    password = "banana",
                                    host = "localhost",
                                    port = "5432",
                                    database = "chat_app")
        cursor = connection.cursor()
        # Print PostgreSQL Connection properties
        #print ( connection.get_dsn_parameters(),"\n")
        # Print PostgreSQL version
        cursor.execute(sql_statement)
        record = cursor.fetchall()
        print('record type: %s' %type(record))
        #print("You, sir, are connected to - ", record, "\n")
    except (Exception, psycopg2.Error) as error :
        print ("Error while connecting to PostgreSQL", error)
    finally:
        #closing database connection.
        if(connection):
            cursor.close()
            connection.close()
            #print("PostgreSQL connection is closed")
            return record

def get_messages():
    messageInfo = open_connection("SELECT * FROM messages;")

    message = {
        "Message Body": messageInfo[0],
        "ID": messageInfo[1]
    }
    return message
   
def get_users():
    userInfo = open_connection("SELECT * FROM users;")

    user = {
        
        "Userinfo": userInfo
        #"First Name": userInfo[0],
        #"Last Name": userInfo[1],
        #"ID": userInfo[2],
        #"Test Column": [3]
    }
    return  user
    

def create_user(username):
    userInfo = open_connection("SELECT * FROM users;")

    parser = reqparse.RequestParser()
    parser.add_argument()
    parser.add_argument()
    args = parser.parse_args()

    for user in users:
        if(username == userInfo["name"]):
            return "User with name {} already exists. Sorry Charley".format(username), 400

            user = {
                "Name": userInfo[3],
                "Create Date" : userInfo[2],
                "User ID": userInfo[1],
                "ID": userInfo[0]
            }
            users.append(user)
            return user, 201

#def createMessage(userID, text):
    # more cody stuff here

#def getMessage(id):
    #use cody stuff to get message by id