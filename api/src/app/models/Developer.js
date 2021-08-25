import Sequelize, { Model } from 'sequelize';

class Developer extends Model {
	static init (sequelize) {
		super.init({ // Chamando init da classe Model
			nome            : Sequelize.STRING      ,
			sexo            : Sequelize.STRING(1)   ,
			idade           : Sequelize.INTEGER     ,
			hobby           : Sequelize.STRING      ,
			datanascimento  : Sequelize.DATE        ,
		}, {
			sequelize,
		});
	}
};

export default Developer;