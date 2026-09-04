const express = require("express");
const cookieparser = require("cookie-parser");
const app = express();
const authRoutes = require("./routes/auth.routes");
const notesRoutes = require("./routes/notes.routes");

app.use(express.json());
app.use(cookieparser());
app.use("/api/auth" , authRoutes);
app.use("/api/notes" , notesRoutes);



module.exports = app ;