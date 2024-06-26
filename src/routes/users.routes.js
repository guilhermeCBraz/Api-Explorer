const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();

function myMiddleware(request, response, next) {
  console.log("Você passou pelo myMiddleware");
  next();
}

const usersController = new UsersController();


usersRoutes.post("/", myMiddleware, usersController.create);

module.exports = usersRoutes;