module.exports = {
	development: {
		host: 'db',
		dialect: 'postgres',
		username: 'potential_crud',
		database: 'potential_crud',
		password: '12345',
		port: 5432,
		define: {
			timestamps: true,
			underscored: true,
			underscoredAll: true,
		}
	}
};