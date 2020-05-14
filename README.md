# Flask-Server-Ubuntu-Docker

## How to run it?
1. `cd` into `NodeServerDocker` and run `docker build . -t node-server`.
2. `cd` into `FlaskServerDocker` and run `docker build . -t flask-server`.
3. `cd` back to the root folder and run `docker-compose up`.
4. Send a POST request to `localhost:3001` from Postman with key-value `{input: hello}`.
