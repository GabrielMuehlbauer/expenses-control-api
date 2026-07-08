![Capa](./docs/banner-repositório.png)

# Expenses Control { API } • Gerenciamento de Gastos

## 📖 Visão Geral do Projeto

O **Expenses Control** é uma API RESTful desenvolvida em Node.js focada no gerenciamento de finanças pessoais. O sistema permite o cadastro de usuários com autenticação segura e a gestão completa (CRUD) de categorias e despesas, aplicando conceitos avançados de filtros e rotas de dashboard estatístico.

O projeto foi construído seguindo rigorosamente o **Padrão Arquitetural MVC** (Model-View-Controller) e utiliza um banco de dados relacional (MySQL) gerenciado através do ORM Sequelize.

---

## 🚀 Tecnologias Utilizadas

- **Node.js & Express.js**: Construção do servidor e roteamento.
- **MySQL & Sequelize**: Banco de dados relacional e ORM (com uso de Migrations e Seeders).
- **Autenticação JWT**: Segurança das rotas privadas utilizando JSON Web Tokens.
- **Bcrypt**: Criptografia de senhas no banco de dados.
- **Dotenv**: Gerenciamento de variáveis de ambiente de forma segura.

---

## Endpoints da API

A API está estruturada em rotas públicas e rotas privadas que exigem autenticação via token JWT.

### Rota Principal `(Pública)`
- `GET /`: Retorna informações básicas sobre o projeto.

### Autenticação e Usuários `(Públicas)`
- `POST /api/users`: Cadastra um novo usuário.
- `POST /api/auth/login`: Autentica um usuário e retorna um token JWT.

### Categorias `(Privada)`
*Requer token de autenticação.*
- `POST /api/categories`: Cria uma nova categoria.
- `GET /api/categories`: Lista todas as categorias do usuário.
- `GET /api/categories/:id`: Busca uma categoria específica.
- `PUT /api/categories/:id`: Atualiza uma categoria.
- `DELETE /api/categories/:id`: Exclui uma categoria.

### Despesas `(Privada)`
*Requer token de autenticação.*
- `POST /api/expenses`: Adiciona uma nova despesa.
- `GET /api/expenses`: Lista todas as despesas do usuário, com suporte a filtros (`status`, `categoryId`, `minAmount`, `maxAmount`, `startDate`, `endDate`).
- `GET /api/expenses/:id`: Busca uma despesa específica.
- `PUT /api/expenses/:id`: Atualiza uma despesa.
- `DELETE /api/expenses/:id`: Exclui uma despesa.

### Dashboard `(Privada)`
*Requer token de autenticação.*
- `GET /api/dashboard/total-expenses`: Retorna a soma total das despesas.
- `GET /api/dashboard/expenses-count`: Retorna a quantidade total de despesas.
- `GET /api/dashboard/expenses-by-category`: Retorna o valor total das despesas agrupado por categoria.

---

## ⚙️ Instruções para Rodar o Projeto

### Pré-requisitos
* **Node.js** instalado na máquina.
* **MySQL** rodando localmente (ex: XAMPP, MySQL Workbench).

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/GabrielMuehlbauer/expenses-control-api.git](https://github.com/GabrielMuehlbauer/expenses-control-api.git)
   cd expenses-control-api
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configuração do Banco de Dados (.env):**
   Crie um arquivo `.env` na raiz do projeto contendo as credenciais do seu banco de dados MySQL local. *Certifique-se de criar o banco de dados previamente no seu gerenciador (ex: `CREATE DATABASE expenses_control;`)*.

4. **Construção das Tabelas (Migrations):**
   Rode o comando abaixo para que o Sequelize construa toda a arquitetura de tabelas automaticamente:
   ```bash
   npx sequelize-cli db:migrate
   ```

5. **População Inicial (Seeders):**
   Rode o comando abaixo para criar o usuário Administrador padrão e as Categorias iniciais:
   ```bash
   npx sequelize-cli db:seed:all
   ```
   * **Login Admin Gerado:** `admin@expensescontrol.com`
   * **Senha:** `admin123`

6. **Inicie o servidor:**
   ```bash
   npm run dev
   ```
   O servidor estará rodando em: `http://localhost:3000/`

---
