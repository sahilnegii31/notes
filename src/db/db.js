// const express = require("express");
const mongoose = require("mongoose");

async function connectDB(){
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DATABASE CONNECTED");
}

module.exports = connectDB;