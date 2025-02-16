import mongoose from 'mongoose'


const teacherSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
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
   
    tid:{
        type:String,
        required:true,
        unique:true,
    } 

}, {timestamps:true})

const Teacher = mongoose.model("Teacher" , teacherSchema)

export default Teacher