require('dotenv').config();

/*
  Should use "localhost" for host if connecting directly (e.g. running migrations or seeds with npm),
  and container_name from docker-compose.yml (in this case docker_postgres)
  if connecting from node container
*/

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: 'docker_postgres',
    port: 5432,
    dialect: 'postgres',
    operatorsAliases: false
  },
  local: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    operatorsAliases: false
  }
};
