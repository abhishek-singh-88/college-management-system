import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
    projectname:{
        type:String,
        required:true,
    },
    sid:{
        type:String,
        required:true,
    },
    projectinfo:{
        type:String,
        required:true,
    },
    media:{
        type:File,
        required:true,
    }
}, {timestamps:true})

const Project = mongoose.model("Project", projectSchema)

export default Project