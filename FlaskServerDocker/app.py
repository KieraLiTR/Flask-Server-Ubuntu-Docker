from flask import Flask, request

app = Flask(__name__)

@app.route('/')
@app.route('/api/flip/<inp>', methods=['POST'])
def index(inp):
    return inp[::-1]


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
