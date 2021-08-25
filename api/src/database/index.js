import Sequelize		from 'sequelize';
import databaseConfig	from '../config/database';
import Developer		from '../app/models/Developer';

const models = [ Developer ];

class Database {

	constructor () {
		this.init();
	}

	init () {
		this.conn = new Sequelize(databaseConfig.development);
		
		models
		.map(model => model.init(this.conn));
	}

}

export default new Database();