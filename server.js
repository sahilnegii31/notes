const express = require("express");
const app = require("./src/app");
const connectdb = require("./db/db");
require("dotenv").config();

app.listen(3000 , ()=>{
    console.log("Server is running on port : 3000");
})
connectdb();
