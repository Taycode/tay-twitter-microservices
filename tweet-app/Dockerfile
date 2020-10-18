FROM node:14

RUN mkdir /tweet-app

WORKDIR /tweet-app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3000

