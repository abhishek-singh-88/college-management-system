import sendMail from '../container/otp.js'
import jwt from 'jsonwebtoken'

export const sendOtp = async (req, res)=>{
try {
   const {mode} =  req.body
    const token = req.cookies.token
    const secret = ''
    if(mode =="student"){
        secret = process.env.JWT_SECRET_STUDENT
    }else if(mode =="teacher"){
        secret = process.env.JWT_SECRET_TEACHER
    }else {
        secret = process.env.JWT_SECRET_PRINCIPAL
    }
    
    
} catch (error) {
    
}

}

export const verifyOtp = async (req, res)=>{

    
}

