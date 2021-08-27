FROM node:16-alpine3.11

WORKDIR /usr/potential-crud/api

COPY package*.json ./

RUN apk update && apk add --no-cache git && yarn install --allow-root

EXPOSE 4000

CMD [ "yarn", "dev" ]