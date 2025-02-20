import Test from '../models/test.model.js'

export const addTest = async (req, res)=>{
    try {
        const {topic, questions, tid, totalnumber} = req.body
        const test = await Test.create({topic, questions, tid, totalnumber})
        res.status(201).json({message:"Test created successfully ! ", test})
    } catch (error) {
        console.log('error in addTest controller : ', error.message);
        res.status(500).json({message:"Internal server error ! "})
    }
}

export const getTest = async (req, res)=>{
    try {
     
        const tests = await Test.find()
        res.status(201).json({message:"Test fetched successfully ! ", tests})
    } catch (error) {
        console.log('error in addTest controller : ', error.message);
        res.status(500).json({message:"Internal server error ! "})
    }
}


export const deleteTest = async (req, res)=>{
    try {
        const {_id} = req.params
        const test = await Test.findByIdAndDelete({_id})
        res.status(201).json({message:"Test deleted successfully ! ",test})
    } catch (error) {
        console.log('error in addTest controller : ', error.message);
        res.status(500).json({message:"Internal server error ! "})
    }
}

export const updateTest = async (req, res)=>{
    try {
        const {topic, questions, tid, totalnumber} = req.body
        const {_id} = req.params
        const test = await Test.findByIdAndUpdate({_id},{topic, questions, tid, totalnumber})
        res.status(201).json({message:"Test updated successfully ! ", test})
    } catch (error) {
        console.log('error in addTest controller : ', error.message);
        res.status(500).json({message:"Internal server error ! "})
    }
}
