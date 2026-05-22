// IMPORTAÇÕES NECESSÁRIAS
const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

// 1. CONFIGURANDO CONEXÃO COM BANCO DE DADOS
const sequelize = new Sequelize('db_api', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// 2. DEFININDO OS MODELOS DE DADOS

// Modelo: Cliente
const Cliente = sequelize.define('Cliente', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Modelo: Funcionário
const Funcionario = sequelize.define('Funcionario', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    cargo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    setor: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Modelo: Produto
const Produto = sequelize.define('Produto', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lote: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER, // Tipo inteiro para contagem de itens
        allowNull: false
    },
    preco: {
        type: DataTypes.DECIMAL(10, 2), // Tipo decimal ideal para moedas (ex: 99.90)
        allowNull: false
    }
});

// 3. CONFIGURAÇÃO DO SERVIDOR EXPRESS
const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;

// 4. ROTAS PARA CLIENTES

// ROTA GET - LISTAR TODOS OS CLIENTES
app.get('/clientes', async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar clientes' });
    }
});

// ROTA POST - CRIAR UM NOVO CLIENTE
app.post('/clientes', async (req, res) => {
    const { nome, email, telefone } = req.body;
    try {
        const novoCliente = await Cliente.create({ nome, email, telefone });
        res.status(201).json(novoCliente);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar cliente' });
    }
});


// 5. ROTAS PARA FUNCIONÁRIOS

// ROTA GET - LISTAR TODOS OS FUNCIONÁRIOS
app.get('/funcionarios', async (req, res) => {
    try {
        const funcionarios = await Funcionario.findAll();
        res.json(funcionarios);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar funcionários' });
    }
});

// ROTA POST - CRIAR UM NOVO FUNCIONÁRIO
app.post('/funcionarios', async (req, res) => {
    const { nome, telefone, email, cargo, setor } = req.body;
    try {
        const novoFuncionario = await Funcionario.create({ nome, telefone, email, cargo, setor });
        res.status(201).json(novoFuncionario);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar funcionário' });
    }
});


// 6. ROTAS PARA PRODUTOS

// ROTA GET - LISTAR TODOS OS PRODUTOS
app.get('/produtos', async (req, res) => {
    try {
        const produtos = await Produto.findAll();
        res.json(produtos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
});

// ROTA POST - CRIAR UM NOVO PRODUTO
app.post('/produtos', async (req, res) => {
    const { nome, lote, quantidade, preco } = req.body;
    try {
        const novoProduto = await Produto.create({ nome, lote, quantidade, preco });
        res.status(201).json(novoProduto);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar produto' });
    }
});


// INICIANDO SERVIDOR
// O sequelize.sync() agora criará também a tabela 'Produtos' automaticamente
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Servidor rodando na porta ${PORT}`);
        console.log('✅ Banco de dados sincronizado com sucesso!');
    });
}).catch((error) => {
    console.error('❌ Erro ao conectar com o banco de dados:', error);
});
