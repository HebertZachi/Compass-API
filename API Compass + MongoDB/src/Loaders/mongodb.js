//Importação do mongoose que é a biblioteca que usamos para manipular o MongoDB com javascript
const mongoose = require('mongoose');

//Adicionando o caminho url para acesso ao MongoDB online
const url = 'mongodb+srv://hebert:123@cluster0.lbf5bra.mongodb.net/test'

//O mongoose.set é solicitado pelo nó durante a execução do programa e sem ele aparece um aviso de que o código estara obsoleto em breve na versão 7 do mongoose.
// A retirada atualmente não causa nenhum erro no aplicativo 01/06/2023
mongoose.set('strictQuery', false);

//Essa função conecta o MongoDB online em nosso programa
async function startMongodb(){
  await mongoose.connect(url);
}

//Exportando a função que carrega o MongoDB no Loaders/index
module.exports = startMongodb;

//OBS esse arquivo foi criado para refatorar o codigo que será usado no server.js que é o Arquivo principal do 