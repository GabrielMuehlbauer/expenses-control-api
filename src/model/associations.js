const ExpenseModel = require('../model/expense');
const CategoryModel = require('../model/category');
const UserModel = require('../model/user');

const Expense = ExpenseModel.Expense;
const Category = CategoryModel.Category;
const User = UserModel.User;

Expense.belongsTo(Category, {
    foreignKey: 'categoryId',
    as: 'category'
});

Category.hasMany(Expense, {
    foreignKey: 'categoryId',
    as: 'expenses'
});

User.hasMany(Expense, {
    foreignKey: 'userId',
    as: 'expenses'
});

Expense.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
});