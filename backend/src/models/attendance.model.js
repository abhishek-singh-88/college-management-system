import mongoose from 'mongoose'

const attendanceSchema = new mongoose.Schema({
    sid:{
        type:String,
        required:true,
    },
    status:{
        type:Boolean,
        required:true,

    },
    key:{
        type:String,
        required:true
    }
},{timestamps:true})