const { Sequelize } = require("sequelize");
require("dotenv").config({ path: `${process.cwd()}/.env` });

const dbName = process.env.DEV_DB_NAME;
const dbUser = process.env.DEV_DB_USER;
const dbPassword = process.env.DEV_DB_PASSWORD;
const dbHost = process.env.DEV_DB_HOST;
const dbDialect = process.env.DEV_DB_DIALECT;

console.log(dbName, dbUser, dbPassword, dbHost);

const db = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: dbDialect,
  host: dbHost,
});

// const main = async () => {
//   try {
//     await Sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// };
// main();

module.exports = db;
