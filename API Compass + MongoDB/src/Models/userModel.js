//Importando Mongoose para usar os métodos Schema e Model
const mongoose = require('mongoose');

//Schema é uma estrutura de dados usada pelo mongoose para criar um modelo para o mongoDB
//Com base nesse modelo, o método http POST criará um novo objeto no banco de dados
const Schema = mongoose.Schema;

//ObjectId é um método que criará um ID exclusivo para o objeto em hexadecimal
const ObjectId = Schema.ObjectId;

//Criação do template/esquema que define os dados que serão usados para criar o objeto no banco de dados
const userSchema = new Schema({
  id: ObjectId,
  name: String,
  age: Number,
  work: String
});

//Cria um modelo para mongoose em que o primeiro parâmetro é o nome da tabela que será criada no banco de dados
//O segundo parâmetro é a estrutura de dados que queremos passar como modelo
const userModel = mongoose.model('Users', userSchema);

//Exportação do modelo que será utilizado pelos controladores para manipular o banco de dados
module.exports = userModel;