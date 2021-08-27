FROM node:alpine

WORKDIR /usr/potential-crud/api

COPY package*.json ./

RUN apk update && apk add --no-cache git && yarn install --allow-root

EXPOSE 4000

CMD [ "yarn", "start" ]