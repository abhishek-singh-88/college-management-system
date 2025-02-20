import Teacher from '../models/teacher.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const teacherSignup = async(req, res)=>{
    try {
        const {name , email, password , branch , tid, age, gender } = req.body
        const hashPassword = bcrypt.hashSync(password, 10)
       const teacher = await Teacher.create({
            name, email, password:hashPassword, branch, tid, age, gender
        })
        res.status(201).json({message:"Registered Successfully ! ", error:false, teacher })
    } catch (error) {
        console.log("Error in teacherSignup controller : ", error.message, error);
        res.status(500).json({message:"Internal server error ! ", error:true, errmsg: error.message})
    }
}


export const teacherLogin = async(req, res)=>{
    try {
        const { password , tid } = req.body
        const teacher = await Teacher.findOne({tid})
        if(!teacher){
            return res.status(404).json({message:"Invalid Teacher Id ! ", error:true})
        }else{
            const match = bcrypt.compareSync(password, teacher.password)
            if(!match){
                return res.status(404).json({message:"Invalid password ! ", error:true})
            }else{
                const token = await jwt.sign({id: teacher._id, name: teacher.name, email: teacher.email}, process.env.JWT_SECRET_TEACHER, {expiresIn:'30d'})
                const user = { token, type:'admin'}
                res.cookie('user', user, {maxAge:30*24*60*60*1000})
                res.status(200).json({message:"Logged in successfully ! ", error:false, teacher })
            }
        }
   
    } catch (error) {
        console.log("error in teacherLogin controller : ", error.message, error);
        res.status(500).json({message:"Internal server error ! ", error:true, errmsg: error.message})
    }
}


export const updateTeacher = async(req, res)=>{
    try {
      const {name, email, branch, age, gender} =  req.body
      const {_id} = req.params
      const teacher = await Teacher.findByIdAndUpdate({_id}, {name, email, branch, age, gender})
        res.status(200).json({message:"Updated successfully ! ", teacher, error:false})
    } catch (error) {
        console.log("error in updateTeacher controller : ", error.message, error);
        res.status(500).json({message:"Internal server error ! ", error:true, errmsg: error.message})
    }
}


export const deleteTeacher = async(req, res)=>{
    try {
       const {_id} =  req.params
       const deletedTeacher = await Teacher.findByIdAndDelete({_id})
       res.status(200).json({message:"Deleted Successfully ! ", deletedTeacher, error:false})
    } catch (error) {
        console.log("error in deleteTeacher controller : ", error.message, error);
        res.status(500).json({message:"Internal server error ! ", error:true, errmsg: error.message})
    }
}


export const getTeachers = async(req, res)=>{
    try {
       const teachers = await Teacher.find()
       res.status(200).json({message:" Here is List of all teachers  ! ", teachers, error:false})
    } catch (error) {
        console.log("error in getTeachers controller : ", error.message, error);
        res.status(500).json({message:"Internal server error ! ", error:true, errmsg: error.message})
    }
}


export const teacherLogout = async(req, res)=>{
    try {
       const token  = req.cookies.token
       if(!token){
        return res.status(200).json({message:"Already Logged Out !", error:false})
       }
       res.cookie('token', '' , {maxAge:0})
       res.status(200).json({message:" Logged out successfully ! ",  error:false})
    } catch (error) {
        console.log("error in teacherLogout controller : ", error.message, error);
        res.status(500).json({message:"Internal server error ! ", error:true, errmsg: error.message})
    }
}




