import Student from '../models/student.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


export const studentSignup = async(req, res)=>{
    try {
        const {name, email, password , age, gender, branch, sid, year, collegeCode} = req.body
        const hashPassword =await bcrypt.hashSync(password, 10)
        const student = await Student.create({name, email, password : hashPassword, age, branch, gender, sid, year, collegeCode })
        res.status(201).json({message:"Student Registered ! ", student, error:false})
    } catch (error) {
        console.log("error in studentSignup controller : ", error.message, error);
        res.status(500).json({message:"Internal server error ! ", error:true, errmsg: error.message})
    }
}

export const studentLogin = async(req, res)=>{
    try {
        const { sid, password} = req.body
        const student = await Student.findOne({sid})
        if(!student){
            res.status(404).json({message:"Invalid Student ID ! " , error:true})
        }else{
          const  match =  bcrypt.compareSync(password, student.password)
          if(!match){
            res.status(404).json({message:"Invalid password ! ", error:true})
          }else{
            const token = await jwt.sign({id: student._id, email: student.email, name: student.name}, process.env.JWT_SECRET_STUDENT, {expiresIn:"7d"})
            const user = { token, type:'student'}
            res.cookie('user', user, {maxAge:7*24*60*60*1000})
            res.status(200).json({message:`Hi ${student.name.split(" ")[0]} welcome to the world of CMS  ! `, error:false})
          }
        }
        
    } catch (error) {
        console.log("error in studentLogin controller : ", error.message, error);
        res.status(500).json({message:"Internal server error ! ", error:true, errmsg: error.message})
    }
}

export const updateStudent = async(req, res)=>{
    try {
        const {_id} = req.params
        const {name, email, age, year, gender, branch }  = req.body
        const student = await Student.findByIdAndUpdate({_id}, {name, email, age, year, gender, branch})
        res.status(200).json({message:"Updated Successfully ! ", student , error:false})

    } catch (error) {
        console.log("error in updateStudent controller : ", error.message, error);
        res.status(500).json({message:"Internal server error ! ", error:true, errmsg: error.message})
    }
}

export const deleteStudent = async(req, res)=>{
    try {
        const {_id} = req.params
        const deletedStudent = await Student.findByIdAndDelete({_id})
        res.status(200).json({message:"Deleted Successfully !", error:false, deletedStudent})
    } catch (error) {
        console.log("error in deleteStudent controller : ", error.message, error);
        res.status(500).json({message:"Internal server error ! ", error:true, errmsg: error.message})
    }
}



export const getStudents = async(req, res)=>{
    try {
        const students = await Student.find()
        res.status(200).json({message:"Students fetched Successfully !", error:false, students})
    } catch (error) {
        console.log("error in getStudents controller : ", error.message, error);
        res.status(500).json({message:"Internal server error ! ", error:true, errmsg: error.message})
    }
}

export const studentLogout = async(req, res)=>{
    try {
        const token = req.cookies.token
        if(!token){
            return res.status(401).json({message:"logged out successfully ! "})
        }
        res.cookie('token', '', {maxAge:0})
        res.status(200).json({message:"Students logged out Successfully !", error:false})
    } catch (error) {
        console.log("error in studentLogout controller : ", error.message, error);
        res.status(500).json({message:"Internal server error ! ", error:true, errmsg: error.message})
    }
}
