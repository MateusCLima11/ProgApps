// IMPORTAÇÕES NECESSÁRIAS
const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize'); // Corrigido: sem o ';' interno e sem duplicidade

// 1. CONFIGURANDO CONEXÃO COM BANCO DE DADOS
const sequelize = new Sequelize('db_api', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// 2. DEFININDO O MODELO DE DADOS
// Alterei para 'Cliente' para bater com suas rotas abaixo
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

// 3. CONFIGURAÇÃO DO SERVIDOR EXPRESS
const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001; // Padronizado para maiúsculo

// 4. ROTAS
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

// INICIANDO SERVIDOR
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Servidor rodando na porta ${PORT}`);
        console.log('✅ Banco de dados sincronizado com sucesso!');
    });
}).catch((error) => {
    console.error('❌ Erro ao conectar com o banco de dados:', error);
});