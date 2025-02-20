import Admin from '../models/admin.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const adminSignup = async(req, res)=>{
    try {
        const {name, email, password} = req.body

        const hashPassword = await bcrypt.hashSync(password, 10)
        const admin = await Admin.create({name, email, password : hashPassword})
        res.status(201).json({message:"Admin created ! ", admin, error:false})
    } catch (error) {
        console.log("error in adminSignup controller : ", error.message, error);
        res.status(500).json({message:"Internal server error ! ", error:true, errmsg: error.message})
    }
}

export const adminLogin = async(req, res)=>{
    try {
        const { email, password} = req.body
        const admin = await Admin.findOne({email})
        if(!admin){
            res.status(404).json({message:"Invalid credentials ! ", error:true})
        }else{
          const  match =  bcrypt.compareSync(password, admin.password)
          if(!match){
            res.status(404).json({message:"Invalid credentials ! ", error:true})
          }else{
            const token = await jwt.sign({id: admin._id, email: admin.email}, process.env.JWT_SECRET_ADMIN, {expiresIn:"365d"})
            const user = { token, type:'admin'}
            res.cookie('user', user, {maxAge:365*24*60*60*1000})
            res.status(200).json({message:`Hi ${admin.name.split(" ")[0]} welcome to the world of CMS  ! `})
          }
        }

        
    } catch (error) {
        console.log("error in adminLogin controller : ", error.message, error);

        res.status(500).json({message:"Internal server error ! ", error:true, errmsg: error.message})
        
    }
}
