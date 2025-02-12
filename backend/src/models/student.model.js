import mongoose from 'mongoose'


const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        uniqu:true
    },
    password:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    branch:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
    },
    year:{
        type:Number,
        required:true,
    },
    sid:{
        type:String,
        required:true,
        unique:true,
    } 

}, {timestamps:true})

const Student = mongoose.model("Student" , studentSchema)

export default Student