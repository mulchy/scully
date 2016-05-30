FROM node
MAINTAINER mulchy

WORKDIR /code
RUN npm install

# Build the app
RUN npm build

# Expose the app port
# EXPOSE 3000

# Start the app
CMD npm start
