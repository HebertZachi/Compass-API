//Importando o express
const express = require('express');

//Criando uma instância do express dentro da constante app
const app = express();

//Importando o middleware criado dentro das rotas
const router = require('./Routes/routes');

//Montando um middleware que pode ser chamado em todas as rotas e que permite usar o req.body
app.use(express.json());

//Montando um middleware que funcione em todas as rotas que iniciam com /api/v1/users 
//em seguida chama o middleware router que contém os métodos http e funções a serem usados por cada rota
app.use('/api/v1/users', router);

//Exportando as funções do express que serão usadas pelo app.listen no server.js
module.exports = app;