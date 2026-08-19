const express = require("express");
const app = require("./src/app");
const connectdb = require("./src/db/db");
require("dotenv").config();

app.listen(5000 , ()=>{
    console.log("Server is running on port : 5000");
})
connectdb();
