const notesModel = require("../models/notes.model");

async function newNotes(req , res ){
    const { title , desc } = req.body;
    const newNote = await notesModel.create({
        title,
        desc,
        userId : req.user.id
    });
    res.status(200).json({
        message : "Note added successfully ",
        user : newNote.userId
    })
}

async function getNotes( req , res ){
    const notes = await notesModel.find({userId : req.user.id});
    res.status(200).json({
        notes
    })
}

async function delNotes( req , res ){
    try{
        const id = req.params.id;
        console.log(id);
        const deleted = await notesModel.findOneAndDelete({
            _id : id,
            userId : req.user.id
        });

        if(!deleted){
            return res.status(404).json({
                message : "Note not found",
            })
        }
        res.status(200).json({
            message : "Note Deleted Successfully"
        })
    }
    catch(err){
        console.log("ERROR  :",err);
        res.status(500).json({
            message : "Failed to delete Note"
        })
    }

}

async function clearNotes(req , res){
    const deleted = await notesModel.deleteMany({userId : req.user.id});
    if(!deleted){
        return res.status(404).json({
            message : "Notes empty"
        })
    }
    res.status(200).json({
        message : "Notes cleared"
    })
}


module.exports = { newNotes , getNotes , delNotes , clearNotes };