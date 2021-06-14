const { createPool } = require("mysql");

<<<<<<< HEAD
//these all parms will give in env file -> npm i dotenv -> npm i mysql
=======

>>>>>>> 19a78c063db61812721a1beddd5e749b7aab43fb
const pool = createPool({
	port:process.env.DB_PORT,
	host:process.env.DB_HOST,
	user:process.env.DB_USER,
	password:process.env.DB_PASS,
	database:process.env.MYSQL_DB,
	connectionLimit:10
});


module.exports = pool;