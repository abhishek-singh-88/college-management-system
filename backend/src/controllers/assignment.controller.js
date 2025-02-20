import Assignment from '../models/assignment.model.js'

export const addAss = async (req, res)=>{
    try {
        const {topic, tid, branch, message, year} = req.body
        const assignment = await Assignment.create({topic, tid, branch, message, year})
        res.status(201).json({message:"Assignment created successfully ! ", assignment})
    } catch (error) {
        console.log('error in addAssignment controller : ', error.message);
        res.status(500).json({message:"Internal server error ! "})
    }
}

export const getAss = async (req, res)=>{
    try {
     
        const assignments = await Assignment.find()
        res.status(201).json({message:"Assignment fetched successfully ! ", assignments})
    } catch (error) {
        console.log('error in addAssignment controller : ', error.message);
        res.status(500).json({message:"Internal server error ! "})
    }
}


export const deleteAss = async (req, res)=>{
    try {
        const {_id} = req.params
        const assignment = await Assignment.findByIdAndDelete({_id})
        res.status(201).json({message:"Assignment deleted successfully ! ",assignment})
    } catch (error) {
        console.log('error in addAssignment controller : ', error.message);
        res.status(500).json({message:"Internal server error ! "})
    }
}

export const updateAss = async (req, res)=>{
    try {
        const {topic, tid, branch, message, year} = req.body
        const {_id} = req.params
        const assignment = await Assignment.findByIdAndUpdate({_id},{topic, tid, branch, message, year})
        res.status(201).json({message:"Assignment updated successfully ! ", assignment})
    } catch (error) {
        console.log('error in addAssignment controller : ', error.message);
        res.status(500).json({message:"Internal server error ! "})
    }
}
