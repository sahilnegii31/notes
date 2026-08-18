const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");

async function registerUser(req , res){
    try {
        const {username , password} = req.body ;
        const hashed = await bcrypt.hash(password, 10);
    
        const user = await userModel.create({
            username,
            password : hashed,
        })
    
        res.status(201).json({
            message : "User Registered successfully"
        })
        
    } catch (error){
      console.log("ERROR : ", error );  
      res.status(500).json({
        message : "Registration failed"
      })
    }
}
module.exports = { registerUser };