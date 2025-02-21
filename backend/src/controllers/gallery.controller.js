import Gallery from '../models/gallery.model.js'

export const addgallery = async (req, res)=>{
    try {
        const {sid, tid, pid} = req.body
        const {media} = req?.files
        media?.mv('src/uploads/gallerys/'+media.name, (err)=>{
            if(err){
                res.json({
                    message:"Error in uploading media in addgallery controller"
                })
            }
        })
        const gallery = await Gallery.create({sid,tid, pid, media:media?.name})
        res.status(201).json({message:"gallery created successfully ! ", gallery})
    } catch (error) {
        console.log('error in addgallery controller : ', error.message);
        res.status(500).json({message:"Internal server error ! "})
    }
}

export const getgallery = async (req, res)=>{
    try {
     
        const gallerys = await Gallery.find()
        res.status(201).json({message:"gallery fetched successfully ! ", gallerys})
    } catch (error) {
        console.log('error in getgallery controller : ', error.message);
        res.status(500).json({message:"Internal server error ! "})
    }
}


export const deletegallery = async (req, res)=>{
    try {
        const {_id} = req.params
        const gallery = await Gallery.findByIdAndDelete({_id})
        res.status(201).json({message:"gallery deleted successfully ! ",gallery})
    } catch (error) {
        console.log('error in deletegallery controller : ', error.message);
        res.status(500).json({message:"Internal server error ! "})
    }
}

export const updategallery = async (req, res)=>{
    try {
        const {_id} = req.params
        const {sid, tid, pid} = req?.body
        const {media} = req.files
        media.mv('src/uploads/gallerys/'+media.name, (err)=>{
            if(err){
                res.json({
                    message:"Error in uploading media in updategallery controller"
                })
            }
        })
        const gallery = await Gallery.findByIdAndUpdate({_id},{sid,tid, pid,media:media.name})
        res.status(201).json({message:"gallery updated successfully ! ", gallery})
    } catch (error) {
        console.log('error in updategallery controller : ', error.message);
        res.status(500).json({message:"Internal server error ! "})
    }
}
