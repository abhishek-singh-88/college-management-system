import mongoose from 'mongoose'


const principalSchema = new mongoose.Schema({
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
    age:{
        type:Number,
    },
   
    pid:{
        type:String,
        required:true,
        unique:true,
    } ,
    otp:{
        type:Number
    },
    expiresAt:{
        type:Number
    }

},{timestamps:true})

const Principal = mongoose.model("Principal" , principalSchema)

export default Principal