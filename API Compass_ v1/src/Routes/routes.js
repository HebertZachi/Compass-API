const express = require('express');
const Controllers = require('./../Controllers/Controllers');

//Criando middleware que faz a função de gerenciar as rotas do NodeJS.
const router = express.Router()

router
  .route('/')
  .get(Controllers.getDataBase)
  .post(Controllers.postValidation, Controllers.createUser);

router
  .route('/:id')
  .patch(Controllers.cantDuplicateID, Controllers.updateData)
  .delete(Controllers.deleteData);

module.exports = router;
