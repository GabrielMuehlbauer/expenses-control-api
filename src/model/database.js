// Importar o Sequelize
const { Sequelize } = require('sequelize');

// Usar variáveis .env
require('dotenv').config();

console.log('Configurações de conexão:', {
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
});

// Fazer conexão com MySQL
const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    dialect: 'mysql',
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT
  }
);

// Exportar
module.exports = {
    sequelize
};