const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");

async function registerUser(req , res){
    try {
        const {username , password} = req.body ;
        const hashed = await bcrypt.hash(password, 10);
        
        const checkUser = await userModel.findOne({username : username});
        if(checkUser){
            return res.status(401).json({
                message : "User already Exist"
            })
        }

        const user = await userModel.create({
            username,
            password : hashed,
        })
        const token = jwt.sign({
            id : user._id,
            username : user.username 
        },process.env.JWT_SECRET);
        
        res.cookie("token",token) //Sending jwt token to the cookie storage

    
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

async function loginUser(req , res ){
    const { username , password } = req.body;
    const user = await userModel.findOne( {username} )
    if(!user){
        return res.status(401).json({
            message : "User Not Found"
        })
    }
    const isPassValid = await bcrypt.compare(password , user.password);



    if(!isPassValid){
        return res.status(401).json({
            message : "Invalid Password"
        })
    }

    const token = jwt.sign({
        id : user._id,
        username : user.username 
    },process.env.JWT_SECRET);

    //sending token to the cookie storage
    res.cookie("token" , token); 

    res.status(200).json({
        message : "User Logged In successfully"
    })

}

module.exports = { registerUser , loginUser };