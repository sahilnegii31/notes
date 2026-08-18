const express = require("express");
const routes = express.Router();
const notesController = require("../controller/notes.controller");
routes.post("/newnotes" , notesController.newNotes);

routes.get("/getnotes" , notesController.getNotes );

routes.delete("/delnotes/:id" , notesController.delNotes);

routes.delete("/clearnotes" , notesController.clearNotes );

module.exports = routes;