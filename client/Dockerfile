FROM node:14

RUN mkdir /client

WORKDIR /client

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3001

