# Base Image
FROM python:3.11-slim

# Install netcat
RUN apt-get update && \
    apt-get -y install ncat && \
    apt-get clean

# set working directory
WORKDIR /usr/src/app

# add and install requirements
COPY ./requirements.txt /usr/src/app/requirements.txt
RUN pip install -r requirements.txt

# add app
COPY . /usr/src/app
EXPOSE 5000
# run server
CMD python index.py
