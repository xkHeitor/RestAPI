FROM node:16-alpine3.11

WORKDIR /usr/potential-crud/front

COPY package*.json ./

RUN apk update && apk add --no-cache git && npm install --allow-root

EXPOSE 8080

CMD [ "npm", "run", "serve" ]