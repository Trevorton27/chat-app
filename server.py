from flask import Flask
from flask import send_from_directory
from flask import render_template
import psycopg2

app = Flask(__name__,
    static_folder="react-app/build/static",
    template_folder="react-app/build"
    )

@app.route('/')
def index():
    return render_template('index.html')

print('Starting Flask. Yay!')

@app.route('/messages', method=['POST'])

@app.route('/retrieve-messages', method=['GET'])

try:
    connection = psycopg2.connect(user = "postgres",
                                  password = "banana",
                                  host = "localhost",
                                  port = "5432",
                                  database = "postgres")
    cursor = connection.cursor()
    # Print PostgreSQL Connection properties
    print ( connection.get_dsn_parameters(),"\n")
    # Print PostgreSQL version
    cursor.execute("SELECT version();")
    record = cursor.fetchone()
    print("You are connected to - ", record,"\n")
except (Exception, psycopg2.Error) as error :
    print ("Error while connecting to PostgreSQL", error)
finally:
    #closing database connection.
        if(connection):
            cursor.close()
            connection.close()
            print("PostgreSQL connection is closed")

if __name__ == "__main__":
    app.run()