//Importa o modelo criado através do Schema para o usuário utilizado nas rotas
const userModel = require('./../Models/userModel');

//Criando uma Classe que contém todos os middlewares que serão usados para manipular o banco de dados através dos métodos http
class userController {

  //Lista todos os objetos criados no banco de dados
  async listAll(req, res){
      //Faz uma busca por todos os objetos e armazena em users
      const users = await userModel.find({});
      try {
        //Mostra o resultado na rota
        res.send(users);
      } catch (error) {
        // Envia um erro de servidor se a opção acima falhar
        res.status(500).send(error);
      }
  }

  //Cria os objetos do banco de dados
  async create(req, res) {
    //Usa req.body para coletar a requisição json passada e criar um objeto no banco de dados de acordo com o schema passado no model
    const createdUser = await userModel.create(req.body);
    //Retorna o objeto criado para ser visualizado
    return res.status(200).json(createdUser);
  }

  //Atualiza o objeto no Banco de dados
  async update(req, res){
    try {
      //Busca o ID passado na rota e atualiza as informações do objeto no banco de dados de acordo com o body passado em json
      const data = await userModel.findByIdAndUpdate(req.params.id, req.body);
      //Se o Id já for encontrado, exibirá o objeto modificado
      res.status(200).json(data);
    } catch (error) {
      //Se o id não for encontrado, retorna um erro não encontrado
      res.status(404).send("ID Not Found");
    }
  }

  async delete(req, res){
      try {
        //Busca o ID passado na rota e Deleta as informações do objeto no banco de dados.
        const user = await userModel.findByIdAndDelete(req.params.id);
        //Verifica se o objeto existe, caso não exista, exibe um erro não encontrado
        if (!user) res.status(404).send("Error, No user found with this ID");
        //Envia um status de OK, sem conteudo
        res.status(204).send();
      } catch (error) {
        // Envia um erro de servidor se não for possível deletar o objeto, mesmo que ele exista
        res.status(500).send(error);
      }
  }
}

//Exporta a classe do controller que será utilizada pelas rotas
module.exports = new userController();