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

// CREATE
async function create(name) {
    return await Category.create({ name });
}

// READ (Listar)
async function getAll() {
    return await Category.findAll();
}

// READ (Obter por ID)
async function getById(id) {
    return await Category.findByPk(id);
}

// UPDATE
async function update(id, name) {
    const category = await Category.findByPk(id);
    if (!category) {
        const erro = new Error("Categoria não encontrada.");
        erro.statusCode = 404;
        throw erro;
    }
    category.name = name;
    return await category.save();
}

// DELETE
async function remove(id) {
    const category = await Category.findByPk(id);
    if (!category) {
        const erro = new Error("Categoria não encontrada.");
        erro.statusCode = 404;
        throw erro;
    }
    return await category.destroy();
}

module.exports = {
    Category,
    create,
    getAll,
    getById,
    update,
    remove
}