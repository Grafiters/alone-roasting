FROM node:latest
MAINTAINER alone_g

WORKDIR /app

COPY ./ .

RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]