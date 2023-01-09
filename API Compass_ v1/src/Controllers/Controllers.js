//Define um banco de dados
const dataBase = [];

//Lista todos os objetos criados no banco de dados
exports.getDataBase = (req, res) => {
  return res.json(dataBase);
};

//É usado durante a criação de um novo objeto
exports.postValidation = (req, res, next) => {
  //Armazena o parâmetro de ID passado na url como um Number
  const id = req.body.id * 1;
  //Verifica se o id existe no banco de dados. Se existir, retorna a posição do elemento, se não existir, retorna -1
  const index = dataBase.findIndex(item => item.id === id);

  //Verifica se o objeto definiu um id e um nome para criação do objeto
  if (!req.body.id ||!req.body.name) {
    return res.status(404).json({ error: 'Id or Name not found' });
  
  //Verifica e garante o que tipo do ID sejá um Number
  } else if (typeof(req.body.id) === 'string') {
    return res.status(400).json({ERROR: 400, message:'ID must be a Number'});

  //Verifica se o id já existe no banco de dados e garante que não sejá duplicado
  } else if (index > -1) {
    return res.status(400).json({ERROR: 400, message:'ID already exists and must be unique'});
  
  //Chama o próximo middleware se todas as outras opções forem falsas
  } else {
    next();
  }
};

//Cria um objeto com base nos dados defidos no body e armazena no database
exports.createUser = (req, res) => {
  dataBase.push(req.body);
  return res.json(req.body);
};

//Caso a chave ID sejá atualizada garante que não haja 2 objetos com o mesmo ID no banco de dados
exports.cantDuplicateID = (req, res, next) => {
  //Armazena o parâmetro de ID passado na url como um Number
  const id = req.body.id * 1;
  //Verifica se o id existe no banco de dados. Se existir, armazena a posição do elemento no banco de dados, se não existir, retorna -1
  const index = dataBase.findIndex(item => item.id === id);
  if (index > -1) {
    res.status(400).json({ERROR: 400, message: 'ID already in use, cant duplicate'})
  //Chama o próximo middleware se todas as outras opções forem falsas
  } else {
      next();
  }
}

//Atualiza o objeto com base no 
exports.updateData = (req, res) => {
  //Armazena o parâmetro de ID passado na url como um Number
  const id = req.params.id * 1;
  //Verifica se o id existe no banco de dados. Se existir, armazena a posição do elemento no banco de dados, se não existir, retorna -1
  const index = dataBase.findIndex(item => item.id === id);
  if (index < 0) {
    return res.status(400).json({ error: 'ID not found' });
  }
  //Faz um Merge dos objetos passados em um novo objeto chamado newData
  const newData = Object.assign({id}, req.body);
  //Adiciona o objeto newData na posição
  dataBase[index] = newData;
  return res.json(newData);
};

exports.deleteData = (req, res) => {
  //Armazena o parâmetro de ID passado na url como um Number
  const id = req.params.id * 1;
  //Verifica se o id existe no banco de dados. Se existir, armazena a posição do elemento no banco de dados, se não existir, retorna -1
  const index = dataBase.findIndex(item => item.id === id);
  //Verifica se o index é menor que 0, o que significa que o id não existe no banco de dados
  if (index < 0) {
    return res.status(400).json({ error: 'ID not found' });
  }
  //Remove um valor do banco de dados de index. Ex: dataBase[1,2,3] com splice(1, 1) retorna dataBase[1,3]
  //                                            Ex: dataBase[1,2,3] com splice(1, 2) retorna dataBase[1]
  dataBase.splice(index, 1);
  return res.status(204).send();
};
