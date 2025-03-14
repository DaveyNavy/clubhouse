const { Router } = require("express");
const usersController = require("../controllers/usersController");
const usersRouter = Router();

usersRouter.get("/", (req, res) => {
  res.send("Hi");
});
usersRouter.get("/register", usersController.registerPageGet);
usersRouter.get("/login", usersController.loginPageGet);
usersRouter.post("/register", usersController.registerPagePost);

module.exports = usersRouter;
