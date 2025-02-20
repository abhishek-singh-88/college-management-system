import mongoose from 'mongoose'

const notesSchema = new mongoose.Schema({
    sid:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    text:{
        type:String,
        required:true,
    },
    media:{
        type:File,
        required:true,
    }
}, {timestamps:true})

const Note = mongoose.model("Note", notesSchema)

export default Note