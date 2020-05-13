# Flask-Server-Ubuntu-Docker

## How to run it?
1. `cd` into the folder and run `docker build . -t flask-server`.
2. Run `docker run -p 3000:5000 flask-server`.
3. Send a POST request to `localhost:3000` from Postman with key-value `{input: hello}`.
