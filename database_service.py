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
        print ( connection.get_dsn_parameters(),"\n")
        # Print PostgreSQL version
        cursor.execute(sql_statement)
        record = cursor.fetchone()
        print('record type: %s' %type(record[0]))
        print("You are connected to - ", record,"\n")
    except (Exception, psycopg2.Error) as error :
        print ("Error while connecting to PostgreSQL", error)
    finally:
        #closing database connection.
            if(connection):
                cursor.close()
                connection.close()
                print("PostgreSQL connection is closed")

def get_messages():
    return open_connection("SELECT version()")

def get_users():
    return open_connection("SELECT * FROM users")