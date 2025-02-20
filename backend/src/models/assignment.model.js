import mongoose from 'mongoose'


const assignmentSchema = new mongoose.Schema({
    topic:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
    branch:{
        type:String,
        required:true,
    }, 
    tid:{
        type:String,
        required:true
    },
    year:{
        type:Number
    }
}, {timestamps:true})

const Assignment = mongoose.model("Assignment", assignmentSchema)
export default Assignment

