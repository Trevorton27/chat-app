from flask import Flask
from flask import send_from_directory
from flask import render_template

app = Flask(__name__, static_folder="react-app/build/static",
template_folder="build")


#@app.route('/react-app/build//index.html')
#def hello():
   #return send_from_directory('react-app/build',
    #'index.html' )

@app.route('/')
def index():
    return render_template('index.html')

print('Starting Flask. Yay!')

app.debug=True


if __name__ == "__main__":
    app.run()