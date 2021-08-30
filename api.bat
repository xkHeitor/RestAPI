docker-compose up --build -d

cd api 

yarn install && yarn sequelize db:migrate && yarn start