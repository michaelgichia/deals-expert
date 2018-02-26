const router = require('express').Router();
const controller = require('./subcategoryController');
const auth = require('../../auth');
const sanitize = require('./subcategorySanitizer');

const checkUser = [auth.decodeToken(), auth.getFreshUser()];

router.param('id', controller.params);

router
  .route('/')
  .get(controller.get)
  .post(sanitize, checkUser, controller.post);

router
  .route('/:id')
  .get(controller.getOne)
  .put(sanitize, checkUser, controller.put)
  .delete(checkUser, controller.delete);

module.exports = router;
