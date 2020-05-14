FROM ubuntu:18.04
RUN apt-get update && apt-get -y install nodejs npm
RUN npm install request express
COPY . /NodeServer/
ENTRYPOINT [ "node" ]
CMD [ "./NodeServer/app.js" ]