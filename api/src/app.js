// import modules
import express		from 'express';
import cors			from 'cors';

// import files
import routes       from './routes';
import './database/index';

class App {

	constructor () {
		this.server = express();

		this.middlewares();
		this.routes();

        console.info('-- API On! --');
	}

	middlewares () {
		console.info('-- Starting middlewares --');
		this.server.use(cors());
		this.server.use(express.json());
	}

	routes () {
		console.info('-- Starting routes --');
		this.server.use(routes);
	}

}

export default new App().server;