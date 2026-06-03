const ExpenseModel = require('../model/expense.js');
const CategoryModel = require('../model/category.js');

class Category {
    constructor() {}

    async create(name) {
        // Validação dos dados
        // Obrigatoriedade do campo nome
        if (!name) {
            const erro = new Error("O nome da categoria é obrigatório.");
            erro.statusCode = 400;
            throw erro;
        }
        return await CategoryModel.create(name);
    }
    
    async getAll() {
        return await CategoryModel.getAll();
    }

    async getById(id) {
        return await CategoryModel.getById(id);
    }

    async update(id, name) {
        // Validação dos dados
        if (!name) {
            const erro = new Error("O nome da categoria é obrigatório.");
            erro.statusCode = 400;
            throw erro;
        }
        return await CategoryModel.update(id, name);
    }

    async remove(id) {
        // Verificar se a categoria tem despesas associadas
        const despesasAssociadas = await ExpenseModel.Expense.findAll({ where: { categoryId: id } });
        if (despesasAssociadas.length > 0) {
            const erro = new Error("Não é possível excluir uma categoria que possui despesas associadas.");
            erro.statusCode = 400;
            throw erro;
        }
        return await CategoryModel.remove(id);
    }
}

module.exports = new Category();