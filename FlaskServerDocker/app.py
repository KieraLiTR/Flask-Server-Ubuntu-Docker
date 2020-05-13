from flask import Flask, request

app = Flask(__name__)


@app.route('/', methods=['POST'])
def index():
    inp = request.args.get('input')
    return inp[::-1]


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
