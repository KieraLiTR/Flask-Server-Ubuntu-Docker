FROM ubuntu:18.04
RUN apt-get update && apt-get -y install python3 python3-pip
RUN pip3 install flask
COPY . /FlaskServer/
ENTRYPOINT [ "python3" ]
CMD [ "./FlaskServer/app.py" ]