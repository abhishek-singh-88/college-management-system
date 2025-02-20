import mongoose from 'mongoose'

const submitTestSchema = new mongoose.Schema({
    testid:{
        type:String, 
        required:true,
    },
    answersheet:{
        type:Array,
        required:true,
    },
    sid:{
        type:String,
        required:true,
    },
    
},{timestamps:true})

const SubmitTest = mongoose.model("Test", submitTestSchema)

export default SubmitTest

