FROM node
MAINTAINER mulchy

WORKDIR /code
COPY . /code
RUN npm install

# Start the app
CMD npm start
