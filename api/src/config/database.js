require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

module.exports = {
	dialect: 'postgres',
	host: process.env.DB_HOST,
	username: process.env.DB_USER,
	database: process.env.DB_NAME,
	password: process.env.DB_PASS,
	port: process.env.DB_PORT,
	define: {
		timestamps: true,
		underscored: true,
		underscoredAll: true,
	}
	
};