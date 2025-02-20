import mongoose, { mongo } from 'mongoose'


const assignmentSubmissionSchema = new mongoose.Schema({
    assid : {
        type:String,
        required:true
    },
    sid:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        required:true
    },
    response:{
        type:String, 
        required:true
    }
}, {timestamps:true})

const StudentAssignment = mongoose.model("StudentAssignment", assignmentSubmissionSchema)

export default StudentAssignment