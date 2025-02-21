import Information from '../models/information.model.js'

export const addinformation = async (req, res)=>{
    try {
        const {info, pid} = req.body
        const {media} = req?.files
        media?.mv('src/uploads/informations/'+media.name, (err)=>{
            if(err){
                res.json({
                    message:"Error in uploading media in addinformation controller"
                })
            }
        })
        const information = await Information.create({info, pid, media:media?.name})
        res.status(201).json({message:"information created successfully ! ", information})
    } catch (error) {
        console.log('error in addinformation controller : ', error.message);
        res.status(500).json({message:"Internal server error ! "})
    }
}

export const getinformation = async (req, res)=>{
    try {
     
        const informations = await Information.find()
        res.status(201).json({message:"information fetched successfully ! ", informations})
    } catch (error) {
        console.log('error in getinformation controller : ', error.message);
        res.status(500).json({message:"Internal server error ! "})
    }
}


export const deleteinformation = async (req, res)=>{
    try {
        const {_id} = req.params
        const information = await Information.findByIdAndDelete({_id})
        res.status(201).json({message:"information deleted successfully ! ",information})
    } catch (error) {
        console.log('error in deleteinformation controller : ', error.message);
        res.status(500).json({message:"Internal server error ! "})
    }
}

export const updateinformation = async (req, res)=>{
    try {
        const {_id} = req.params
        const {info, pid} = req.body
        const {media} = req.files
        media.mv('src/uploads/informations/'+media.name, (err)=>{
            if(err){
                res.json({
                    message:"Error in uploading media in updateinformation controller"
                })
            }
        })
        const information = await Information.findByIdAndUpdate({_id},{info, pid,media:media.name})
        res.status(201).json({message:"information updated successfully ! ", information})
    } catch (error) {
        console.log('error in updateinformation controller : ', error.message);
        res.status(500).json({message:"Internal server error ! "})
    }
}
