// Importa o Sequelize
const { sequelize } = require('./database');

// Importa a função de DataTypes do Sequelize
const { DataTypes } = require('sequelize');

// Modelo de Categoria
const Category = sequelize.define('category', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
});