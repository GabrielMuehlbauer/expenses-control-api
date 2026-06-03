const CategoryController = require('../controller/category');

class Category {
    constructor() {}

    async create(req, res) {
        try {
            const { name } = req.body;

            const novaCategoria = (await CategoryController.create(name)).toJSON();

            novaCategoria._links = [
                {
                    rel: "self",
                    method: "GET",
                    href: `http://localhost:3000/api/categories/${novaCategoria.id}`
                },
                {
                    rel: "update",
                    method: "PUT",
                    href: `http://localhost:3000/api/categories/${novaCategoria.id}`
                },
                {
                    rel: "delete",
                    method: "DELETE",
                    href: `http://localhost:3000/api/categories/${novaCategoria.id}`
                },
                {
                    rel: "all_categories",
                    method: "GET",
                    href: "http://localhost:3000/api/categories"
                }
            ];

            res.status(201).json(novaCategoria);
        } catch (error) {
            res.status(error.statusCode || 500).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const categorias = await CategoryController.getAll();

            const categoriasComLinks = categorias.map(categoria => {
                const categoriaFormatada = categoria.toJSON();
                categoriaFormatada._links = [
                    {
                        rel: "self",
                        method: "GET",
                        href: `http://localhost:3000/api/categories/${categoriaFormatada.id}`
                    },
                    {
                        rel: "update",
                        method: "PUT",
                        href: `http://localhost:3000/api/categories/${categoriaFormatada.id}`
                    },
                    {
                        rel: "delete",
                        method: "DELETE",
                        href: `http://localhost:3000/api/categories/${categoriaFormatada.id}`
                    }
                ];
                return categoriaFormatada;
            });

            res.status(200).json(categoriasComLinks);
        } catch (erro) {
            // Pega o status que veio do Controller/Model, ou usa 500 se for um erro inesperado do sistema
            const status = erro.statusCode || 500;

            // Devolve a resposta dinâmica
            return res.status(status).json({ error: erro.message });
        }
    }

    async getById(req, res) {
        try {
            const { id } = req.params;
            const categoria = await CategoryController.getById(id);

            if (!categoria) {
                return res.status(404).json({ error: "Categoria não encontrada" });
            }

            const categoriaFormatada = categoria.toJSON();

            categoriaFormatada._links = [
                {
                    rel: "self",
                    method: "GET",
                    href: `http://localhost:3000/api/categories/${categoriaFormatada.id}`
                },
                {
                    rel: "update",
                    method: "PUT",
                    href: `http://localhost:3000/api/categories/${categoriaFormatada.id}`
                },
                {
                    rel: "delete",
                    method: "DELETE",
                    href: `http://localhost:3000/api/categories/${categoriaFormatada.id}`
                }
            ];

            res.status(200).json(categoriaFormatada);
        } catch (erro) {
            // Pega o status que veio do Controller/Model, ou usa 500 se for um erro inesperado do sistema
            const status = erro.statusCode || 500;

            // Devolve a resposta dinâmica
            return res.status(status).json({ error: erro.message });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const { name } = req.body;

            const categoriaAtualizada = await CategoryController.update(id, name);

            if (!categoriaAtualizada) {
                return res.status(404).json({ error: "Categoria não encontrada" });
            }

            const categoriaFormatada = categoriaAtualizada.toJSON();
            categoriaFormatada._links = [
                {
                    rel: "self",
                    method: "GET",
                    href: `http://localhost:3000/api/categories/${categoriaFormatada.id}`
                },
                {
                    rel: "update",
                    method: "PUT",
                    href: `http://localhost:3000/api/categories/${categoriaFormatada.id}`
                },
                {
                    rel: "delete",
                    method: "DELETE",
                    href: `http://localhost:3000/api/categories/${categoriaFormatada.id}`
                }
            ];

            res.status(200).json(categoriaFormatada);
        } catch (erro) {
            // Pega o status que veio do Controller/Model, ou usa 500 se for um erro inesperado do sistema
            const status = erro.statusCode || 500;

            // Devolve a resposta dinâmica
            return res.status(status).json({ error: erro.message });
        }
    }

    async remove(req, res) {
        try {
            const { id } = req.params;

            const categoriaExcluida = await CategoryController.remove(id);

            if (!categoriaExcluida) {
                return res.status(404).json({ error: "Categoria não encontrada" });
            }

            const respostaDelete = { message: "Categoria excluída com sucesso!",
                _links: [
                    {
                        rel: "all_categories",
                        method: "GET",
                        href: "http://localhost:3000/api/categories"
                    }
                ]};

            res.status(200).json(respostaDelete);
        } catch (erro) {
            // Pega o status que veio do Controller/Model, ou usa 500 se for um erro inesperado do sistema
            const status = erro.statusCode || 500;

            // Devolve a resposta dinâmica
            return res.status(status).json({ error: erro.message });
        }
    }
}

module.exports = new Category();