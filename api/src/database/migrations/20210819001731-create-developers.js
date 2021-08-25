'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		// Add altering commands here.
		return queryInterface.createTable('developers', {
			id: {
				type: Sequelize.INTEGER, 
				allowNull: false, 
				autoIncrement: true, 
				primaryKey: true,
			},
			nome: {
				type: Sequelize.STRING, 
				allowNull: false,
			},
			sexo: {
				type: Sequelize.STRING(1), 
				allowNull: false,
			}, 
			idade: {
				type: Sequelize.INTEGER, 
				allowNull: false,
			},
			hobby: {
				type: Sequelize.STRING, 
				allowNull: false,
			},
			datanascimento: {
				type: Sequelize.DATE, 
				allowNull: false,
			},
			created_at: {
				type: Sequelize.DATE, 
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE, 
				allowNull: false,
			},
		});
	},

	down: async (queryInterface) => {
		// Add reverting commands here.
		return queryInterface.dropTable('developers');
	}
};
