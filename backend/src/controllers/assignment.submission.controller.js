import StudentAssignment from '../models/assignmentSubmission.model.js'

export const addAssSub = async (req, res)=>{
    try {
        const {status, sid, assid, response} = req.body
        const assignment = await StudentAssignment.create({status, sid, assid, response})
        res.status(201).json({message:"Assignment created successfully ! ", assignment})
    } catch (error) {
        console.log('error in addAssignmentSubmission controller : ', error.message);
        res.status(500).json({message:"Internal server error ! "})
    }
}

export const getAssSub = async (req, res)=>{
    try {
     
        const assignments = await StudentAssignment.find()
        res.status(201).json({message:"Assignment fetched successfully ! ", assignments})
    } catch (error) {
        console.log('error in getAssignmentSubmission controller : ', error.message);
        res.status(500).json({message:"Internal server error ! "})
    }
}


export const deleteAssSub = async (req, res)=>{
    try {
        const {_id} = req.params
        const assignment = await StudentAssignment.findByIdAndDelete({_id})
        res.status(201).json({message:"Assignment deleted successfully ! ",assignment})
    } catch (error) {
        console.log('error in deleteAssignmentSubmission controller : ', error.message);
        res.status(500).json({message:"Internal server error ! "})
    }
}

export const updateAssSub = async (req, res)=>{
    try {
        const {status, sid, assid, response} = req.body
        const {_id} = req.params
        const assignment = await StudentAssignment.findByIdAndUpdate({_id},{status, sid, assid, response})
        res.status(201).json({message:"Assignment updated successfully ! ", assignment})
    } catch (error) {
        console.log('error in updateAssignmentSubmission controller : ', error.message);
        res.status(500).json({message:"Internal server error ! "})
    }
}
