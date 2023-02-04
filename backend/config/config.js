require("dotenv").config({ path: `${process.cwd()}/.env` });

module.exports = {
  development: {
    dialect: process.env.DEV_DB_DIALECT,
    database: process.env.DEV_DB_NAME,
    username: process.env.DEV_DB_USER,
    password: process.env.DEV_DB_PASSWORD,
    host: process.env.DEV_DB_HOST,
  },
  production: {
    dialect: process.env.DB_DIALECT,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
  },
};
