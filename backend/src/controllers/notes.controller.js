import Notes from '../models/Notes.model.js'

export const addnotes = async (req, res)=>{
    try {
        const {text, title, sid} = req.body
        const {media} = req.files
        media.mv('src/uploads/notes/'+media.name, (err)=>{
            if(err){
                res.json({
                    message:"Error in uploading media in addnotes controller"
                })
            }
        })
       const notes = await Notes.create({ title, text, sid, media:media.name})
        res.status(201).json({message:"notes created successfully ! ", notes})
    } catch (error) {
        console.log('error in addnotes controller : ', error.message);
        res.status(500).json({message:"Internal server error ! "})
    }
}

export const getnotes = async (req, res)=>{
    try {
     
        const notes = await Notes.find()
        res.status(201).json({message:"notes fetched successfully ! ", notes})
    } catch (error) {
        console.log('error in getnotes controller : ', error.message);
        res.status(500).json({message:"Internal server error ! "})
    }
}


export const deletenotes = async (req, res)=>{
    try {
        const {_id} = req.params
        const notes = await Notes.findByIdAndDelete({_id})
        res.status(201).json({message:"notes deleted successfully ! ",notes})
    } catch (error) {
        console.log('error in deletenotes controller : ', error.message);
        res.status(500).json({message:"Internal server error ! "})
    }
}

export const updatenotes = async (req, res)=>{
    try {
        const {_id} = req.params
        const {text, title, sid} = req.body
        const {media} = req.files
        media.mv('src/uploads/notes/'+media.name, (err)=>{
            if(err){
                res.json({
                    message:"Error in uploading media in updatenotes controller"
                })
            }
        })
        const notes = await Notes.findByIdAndUpdate({_id},{text, title, sid,media:media.name})
        res.status(201).json({message:"notes updated successfully ! ", notes})
    } catch (error) {
        console.log('error in updatenotes controller : ', error.message);
        res.status(500).json({message:"Internal server error ! "})
    }
}
