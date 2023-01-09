//Importando as funções do express através da constante criada em app.js
const app = require('./app');

//Importando os Louders criados
const Louders = require('./Loaders/index');

//Carregando o banco de dados através da Class Louders que carrega a função startMongodb
Louders.start();

//Criando uma porta que permite ao servidor escutar as requisições
app.listen(3000, (req, res) => {
  console.log('Server is running');
});