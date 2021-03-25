const routes = requires("express");

const SessionController = require("./app/controllers/SessionController");

routes.post("/sessions", SessionController.store);

module.exports = routes;
