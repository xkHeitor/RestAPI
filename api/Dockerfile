FROM node:16-alpine3.11

WORKDIR /usr/potential-crud/api

COPY *.json ./

RUN npm install yarn 
RUN yarn global add sucrase
RUN yarn install

EXPOSE 4000

CMD [ "yarn", "start" ]