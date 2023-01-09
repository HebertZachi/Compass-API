const {Router} = require('express');
const userController = require('./../Controllers/userControllers');

//Criando middleware que faz a função de gerenciar as rotas do NodeJS.
const router = Router();


router
  .route('/')
  .get(userController.listAll)
  .post(userController.create);

router
  .route('/:id')
  .patch(userController.update)
  .delete(userController.delete);

module.exports = router;