# Potential-Crud

Projeto REST API Crud, ambiente docker, contendo 3 container para, api, front e db.

Este é um projeto contendo o código de um CRUD feito em NodeJS e Docker/Docker-compose.

Um CRUD montado com:
* [NodeJS v14.17](https://hub.docker.com/_/node?tab=description&page=1&ordering=last_updated).
* [postgres v14](https://hub.docker.com/_/postgres).

API desenvolvida em Node js utilizando o express v4.17.1

## Instalação

Clone este repositório

```bash
git clone https://github.com/xkHeitor/pontential-crud.git
cd pontential-crud
```

Após fazer o clone do projeto, agora precisa startar o docker para que builde e suba o projeto.

```bash
docker-compose up --build
```

## Utilização

Ao terminar o processo de buildar e subir os containers, a aplicação já está pronta, mas primeiro é necessário utilizar o sequelize para executar as migrates.

```bash
docker exec api sh run_migrations.sh
```

A partir deste momento, o projeto está pronto para ser utilizado nas portas:

```bash
API     : 4000
FRONT   : 8080
```


## Informações adicionais

API pode ser consumida através do endereço http://localhost:4000/developers.

```
	- GET /developers				- Retorna todos os desenvolvedores
	- GET /developers?querystring	- Retorna os desenvolvedores de acordo com o termo passado via querystring e paginação, exemplo: "?limit=1&page=2" limit quantos devs, e page a página atual.
	- GET /developers/{id}			- Retorna os dados de um desenvolvedor pelo ID
	- POST /developers				- Cria um novo desenvolvedor
	- PUT /developers/{id}			- Altera os dados de um desenvolvedor
	- DELETE /developers/{id}		- Remove um desenvolvedor
```

## Documentação e Código fonte

Aplicação elaborada e dividida em duas. 

Frontend criado em vueJS SPA (single-page application).

Backend baseado em express e sequelize com banco de dados em postgres.

## License

Código elaborado por Heitor Carvalho Rodrigues.