const router = require("express").Router();
const logger = require("../../utils/logger");
const controller = require("./userController");
const auth = require("../../auth");

const checkUser = [auth.decodeToken(), auth.getFreshUser()];

router.param("id", controller.params);
router.get("/me", checkUser, controller.me);

router
  .route("/")
  .get(checkUser, controller.get) // Todo: Only admin should do this
  .post(controller.post);

router
  .route("/:id")
  .get(controller.getOne)
  .put(checkUser, controller.put)
  .delete(checkUser, controller.delete);

module.exports = router;
