//Importação da função que conecta o Mongodb na aplicação
const startMongodb = require('./mongodb');

//Classe contendo todas as funções que precisam ser carregadas e iniciadas durante a inicialização do aplicativo no arquivo server.js
class Loaders {
  //Função que será importada para o server.js para iniciar a conexão com o banco de dados quando a aplicação iniciar
  start() {
    //Função que chama a conexão com o Mongodb
    startMongodb();
  }
}

//Exportando a Classe Loaders
module.exports = new Loaders();