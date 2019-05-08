from flask import Flask
from flask import send_from_directory

app = Flask(__name__)


@app.route('/uploads/<path:/react-app/build/index.html>')
def download_file():
   return send_from_directory(app.config['UPLOAD_FOLDER'],
    'index.html', as_attachment=True )



if __name__ == "__main__":
    app.run()