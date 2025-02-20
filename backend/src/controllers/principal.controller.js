import Principal from '../models/principal.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const principalSignup = async(req, res)=>{
    try {
        const {name, email, password, pid, age, gender} = req.body
        const hashPassword =bcrypt.hashSync(password, 10)
        const principal = await Principal.create({name, email, password : hashPassword, age,  gender, pid })
        res.status(201).json({message:"Registration successfully  ! ", principal, error:false})
    } catch (error) {
        console.log("error in principalSignup controller : ", error.message, error);
        res.status(500).json({message:"Internal server error ! ", error:true, errmsg: error.message})
    }
}

export const principalLogin = async(req, res)=>{
    try {
        const { pid, password} = req.body
        const principal = await Principal.findOne({pid})
        if(!principal){
            res.status(404).json({message:"Invalid Principal ID ! " , error:true})
        }else{
          const  match =  bcrypt.compareSync(password, principal.password)
          if(!match){
            res.status(404).json({message:"Invalid password ! ", error:true})
          }else{
            const token = await jwt.sign({id: principal._id, email: principal.email, name:principal.name}, process.env.JWT_SECRET_PRINCIPAL, {expiresIn:"30d"})
            const user = { token, type:'principal'}
            res.cookie('user', user, {maxAge:30*24*60*60*1000})
            res.status(200).json({message:`Hi ${principal.name.split(" ")[0]} sir,  welcome to the world of CMS  ! `, error:false})
          }
        }
    } catch (error) {
        console.log("error in principalLogin controller : ", error.message, error);
        res.status(500).json({message:"Internal server error ! ", error:true, errmsg: error.message})
    }
}

export const updatePrincipal = async(req, res)=>{
    try {
        const {_id} = req.params
        const {name, email, age, gender }  = req.body
        const principal = await Principal.findByIdAndUpdate({_id}, {name, email, age, gender})
        res.status(200).json({message:"Updated Successfully ! ", principal , error:false})
    } catch (error) {
        console.log("error in updatePrincipal controller : ", error.message, error);
        res.status(500).json({message:"Internal server error ! ", error:true, errmsg: error.message})
    }
}

export const deletePrincipal = async(req, res)=>{
    try {
        const {_id} = req.params
        const deletedPrincipal = await Principal.findByIdAndDelete({_id})
        res.status(200).json({message:"Deleted Successfully !", error:false, deletedPrincipal})
        
    } catch (error) {
        console.log("error in deletePrincipal controller : ", error.message, error);
        res.status(500).json({message:"Internal server error ! ", error:true, errmsg: error.message})
    }
}


export const getPrincipals = async(req, res)=>{
    try {
        const principals = await Principal.find()
        res.status(200).json({message:"Fetched Successfully !", error:false, principals})
    } catch (error) {
        console.log("error in deletePrincipal controller : ", error.message, error);
        res.status(500).json({message:"Internal server error ! ", error:true, errmsg: error.message})
    }
}



