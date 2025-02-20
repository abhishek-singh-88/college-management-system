import mongoose from 'mongoose'

const infoSchema = new mongoose.Schema({
    info:{
        type:String,
        required:true,
    },
    media:{
        type:File,
        
    },
    pid:{
        type:String,
        required:True
    }
}, {timestamps:true})

const Information = mongoose.model("Information", infoSchema)

export default Information
