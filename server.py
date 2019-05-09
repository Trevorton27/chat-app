from flask import Flask
from flask import send_from_directory

app = Flask(__name__)


@app.route('/')
def hello():
   return send_from_directory('/build', 'index.html')



if __name__ == "__main__":
    app.run()