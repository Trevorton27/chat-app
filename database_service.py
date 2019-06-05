import psycopg2
from flask_restful import Api, Resource, reqparse
from flask import jsonify

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
    message_records = open_connection("SELECT * FROM messages;")
    
    messages = []
    for message in message_records:
        messages.append({
            "id": message[0],
            "text": message[2]
        })
        
    return messages
   
def get_users():
    user_records = open_connection("SELECT * FROM users;")

    users = []

    for user in user_records:
        users.append({
            "id": user[0],
            "username": user[2]
        })

    return users
   
def post_message():
    new_message = open_connection("ALTER TABLE public.messages DROP COLUMN text;")
    
    message = []
    for message in new_message:
        message.append({
            "text": message[2]
        })
    
    message = ["Post request message text here."]
    for message in new_message:
        message.append({
            "text": message[2]
        })
    return message

#def create_user(username)
    

#def createMessage(userID, text):
    # more cody stuff here

#def getMessage(id):
    #use cody stuff to get message by id