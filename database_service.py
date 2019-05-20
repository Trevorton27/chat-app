import psycopg2

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
        record = cursor.fetchone()
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
    userInfo = open_connection("SELECT * FROM users")

    user = {
        "First Name": userInfo[0],
        "Last Name": userInfo[1],
        "ID": userInfo[2]
    }
    return  user