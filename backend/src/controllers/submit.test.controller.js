import SubmitTest from '../models/submitTest.model.js'

export const addSubmitTest = async (req, res)=>{
    try {
        const {testid, answer, sid} = req.body
        const submittest = await SubmitTest.create({testid, answer, sid})
        res.status(201).json({message:"SubmitTest created successfully ! ", submittest})
    } catch (error) {
        console.log('error in addSubmitTest controller : ', error.message);
        res.status(500).json({message:"Internal server error ! "})
    }
}

export const getSubmitTest = async (req, res)=>{
    try {
     
        const submittests = await SubmitTest.find()
        res.status(201).json({message:"SubmitTest fetched successfully ! ", submittests})
    } catch (error) {
        console.log('error in getSubmitTest controller : ', error.message);
        res.status(500).json({message:"Internal server error ! "})
    }
}


export const deleteSubmitTest = async (req, res)=>{
    try {
        const {_id} = req.params
        const submittest = await SubmitTest.findByIdAndDelete({_id})
        res.status(201).json({message:"SubmitTest deleted successfully ! ",submittest})
    } catch (error) {
        console.log('error in deleteSubmitTest controller : ', error.message);
        res.status(500).json({message:"Internal server error ! "})
    }
}

export const updateSubmitTest = async (req, res)=>{
    try {
        const {testid, answer, sid} = req.body
        const {_id} = req.params
        const submittest = await SubmitTest.findByIdAndUpdate({_id},{testid, answer, sid})
        res.status(201).json({message:"SubmitTest updated successfully ! ", submittest})
    } catch (error) {
        console.log('error in updateSubmitTest controller : ', error.message);
        res.status(500).json({message:"Internal server error ! "})
    }
}
