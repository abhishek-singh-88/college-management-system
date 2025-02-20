import mongoose from 'mongoose'

const testSchema = new mongoose.Schema({
    topic:{
        type:String, 
        required:true,
    },
    questions:{
        type:Array,
        required:true,
    },
    totalnumber:{
        type:Number,
        required:true,
    },
    tid:{
        type:String,
        required:true
    }
},{timestamps:true})

const Test = mongoose.model("Test", testSchema)

export default Test

