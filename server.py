from flask import Flask
from flask import send_from_directory
app = Flask(__name__)

@app.route('/react-app/path:index.html')
def download_file(index):
    return send_from_directory('react-app', 'build', 'static')

if __name__ == "__main__":
    app.run()