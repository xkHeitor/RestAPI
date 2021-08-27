require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

console.log(process.env.DB_DIALECT)
module.exports = {
	development: {
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
	}
};