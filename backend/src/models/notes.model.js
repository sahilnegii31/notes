const mongoose = require("mongoose");
const notesSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    desc : {
        type : String,

    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        role : "user",
        required : true
    }
},{timestamps : true}) 
const notes = mongoose.model("notes" , notesSchema) ;
module.exports = notes;