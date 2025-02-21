import Project from '../models/project.model.js'

export const addProject = async (req, res)=>{
    try {
        const {projectname, projectinfo, sid} = req.body
        const {media} = req.files
        media.mv('src/uploads/projects/'+media.name, (err)=>{
            if(err){
                res.json({
                    message:"Error in uploading media in addProject controller"
                })
            }
        })
        const project = await Project.create({projectname, projectinfo, sid, media:media.name})
        res.status(201).json({message:"project created successfully ! ", project})
    } catch (error) {
        console.log('error in addproject controller : ', error.message);
        res.status(500).json({message:"Internal server error ! "})
    }
}

export const getProject = async (req, res)=>{
    try {
     
        const projects = await Project.find()
        res.status(201).json({message:"project fetched successfully ! ", projects})
    } catch (error) {
        console.log('error in getproject controller : ', error.message);
        res.status(500).json({message:"Internal server error ! "})
    }
}


export const deleteProject = async (req, res)=>{
    try {
        const {_id} = req.params
        const project = await Project.findByIdAndDelete({_id})
        res.status(201).json({message:"project deleted successfully ! ",project})
    } catch (error) {
        console.log('error in deleteproject controller : ', error.message);
        res.status(500).json({message:"Internal server error ! "})
    }
}

export const updateProject = async (req, res)=>{
    try {
        const {_id} = req.params
        const {projectname, projectinfo, sid} = req.body
        const {media} = req.files
        media.mv('src/uploads/projects/'+media.name, (err)=>{
            if(err){
                res.json({
                    message:"Error in uploading media in updateProject controller"
                })
            }
        })
        const project = await Project.findByIdAndUpdate({_id},{projectname, projectinfo, sid,media:media.name})
        res.status(201).json({message:"project updated successfully ! ", project})
    } catch (error) {
        console.log('error in updateproject controller : ', error.message);
        res.status(500).json({message:"Internal server error ! "})
    }
}
