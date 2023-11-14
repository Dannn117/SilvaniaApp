FROM node:14-alpine

COPY . /src

WORKDIR /src

RUN npm install

EXPOSE 80

ENTRYPOINT [ "node", "./app.js" ]