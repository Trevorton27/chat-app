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
    message_records = open_connection("SELECT messages.id, users.username, messages.text FROM messages INNER JOIN users ON messages.user_id = users.id;")
    
    messages = []
    for message in message_records:
        messages.append({
            "id": message[0],
            "username": message[1],
            "text": message[2]
        })
        
    return messages

def get_single_user(id):
    sql_statement = "SELECT * FROM users WHERE id = " + id
    user_records = open_connection(sql_statement)
    user = user_records[0]

    return { "id": user[0], "firstName": user[1], "lastName": user[2], "userName": user[3], "createdAt": user[4]}


def get_users():
    user_records = open_connection("SELECT * FROM users;")

    users = []

    for user in user_records:
        users.append({
            "id": user[0],
            "username": user[2]
        })

    return users

def create_user(username):
    connection = psycopg2.connect(user = "postgres",
                                    password = "banana",
                                    host = "localhost",
                                    port = "5432",
                                    database = "chat_app")
    cursor = connection.cursor()
    cursor.execute("INSERT INTO public.users(username) VALUES (%s) RETURNING id;", [username])
    connection.commit()

    user_id = cursor.fetchone()
    return user_id[0]
   
def create_message(user_id, message_text):
    connection = psycopg2.connect(user = "postgres",
                                    password = "banana",
                                    host = "localhost",
                                    port = "5432",
                                    database = "chat_app")
    cursor = connection.cursor()
    cursor.execute("INSERT INTO messages (user_id, text) VALUES (%(user_id)s, %(message_text)s) RETURNING id",
    { "message_text": message_text, "user_id": user_id})
    connection.commit()

    message_id = cursor.fetchone()
    #print('message_id: %s' % message_id)

    cursor.execute("SELECT * FROM messages WHERE id = %s", [ message_id ])
    message_record = cursor.fetchone()
    print(message_record)


    print("user_id: %s" % user_id)
    print("messasge_text: %s" % message_text)

    return { 
        "id": message_record[0], 
        "user_id": message_record[1], 
        "message_text": message_record[2], 
        "created_at": message_record[3]
        }
   
    
  

#def create_user(username)
    

#def createMessage(userID, text):
    # more cody stuff here

#def getMessage(id):
    #use cody stuff to get message by id