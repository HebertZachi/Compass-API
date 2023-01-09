//Importando as funções do express através da constante criada em app.js
const app = require('./app');

//Criando uma porta que permite ao servidor escutar as requisições
app.listen(3000, (req, res) => {
  console.log('Server is running');
});