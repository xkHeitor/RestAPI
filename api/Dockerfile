FROM node:16-alpine3.11

WORKDIR /usr/potential-crud/api

COPY package*.json ./
COPY yarn.lock ./
COPY .env ./
COPY .sequelizerc ./

RUN yarn install

COPY . .

RUN yarn sequelize db:migrate

EXPOSE 4000

CMD [ "yarn", "start" ]