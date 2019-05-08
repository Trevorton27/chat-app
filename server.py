from flask import Flask
from flask import send_from_directory

app = Flask(__name__)


@app.route('/build/<path:/index.html>')
def download_file('index.html'):
   return send_from_directory(app.config['UPLOAD_FOLDER'],
    'index.html', as_attachment=True )



if __name__ == "__main__":
    app.run()