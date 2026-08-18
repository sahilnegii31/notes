const express = require("express");
const routes = express.Router();
const notesController = require("../controller/notes.controller");
const authMiddleware = require("../middleware/token.middleware")

routes.post("/newnotes" , authMiddleware.verifyToken ,notesController.newNotes);

routes.get("/getnotes" , authMiddleware.verifyToken , notesController.getNotes );

routes.delete("/delnotes/:id" , authMiddleware.verifyToken ,notesController.delNotes);

routes.delete("/clearnotes" , authMiddleware.verifyToken ,notesController.clearNotes );

module.exports = routes;