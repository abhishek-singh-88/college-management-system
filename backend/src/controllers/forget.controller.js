import sendMail from "../container/otp.js";
import jwt from "jsonwebtoken";
import Student from "../models/student.model.js";
import Principal from "../models/principal.model.js";
import Teacher from "../models/teacher.model.js";
import bcrypt from 'bcryptjs'


export const sendOtp = async (req, res) => {
  try {
    const user = req.cookies.user;
    let secret = "";
    let person;
    if (user.type == "student") {
      secret = process.env.JWT_SECRET_STUDENT;
      person = Student;
    } else if (user.type == "teacher") {
      secret = process.env.JWT_SECRET_TEACHER;
      person = Teacher;
    }else{
      secret = process.env.JWT_SECRET_PRINCIPAL;
      person = Principal;
    }
    const info = jwt.verify(user.token, secret);
    const otp = sendMail(info.email, info.name);
    await person.findByIdAndUpdate(
      { _id: info.id },
      { otp, expiresAt: Date.now() + 10 * 60 * 1000 }
    );
    res
      .status(200)
      .json({
        message: `OTP has sent to your email : ${info.email},  please check your email`,
      });
  } catch (error) {
    console.log("error in sendOtp controller : ", error.message, error);
    res
      .status(500)
      .json({
        message: "Internal server error ! ",
        error: true,
        errmsg: error.message,
      });
  }
};

export const verifyOtp = async (req, res) => {
  try {
    const { otp } = req.body;
    const user = req.cookies.user

    let secret = "";
    let person;
    if (user.type == "student") {
      secret = process.env.JWT_SECRET_STUDENT;
      person = Student;
    } else if (user.type == "teacher") {
      secret = process.env.JWT_SECRET_TEACHER;
      person = Teacher;
    } else {
      secret = process.env.JWT_SECRET_PRINCIPAL;
      person = Principal;
    }
    const info = jwt.verify(user.token, secret);
    let data = await person.findOne({ email: info.email });
    console.log(data.otp);
    console.log(data.expiresAt);
    console.log(Date.now());
    
    
    
    if (data.otp == otp && data.expiresAt > Date.now()) {

      res.status(200).json({ message: "OTP verified successfully ! " });
    } else {
      res.status(400).json({ message: "Invalid OTP / expired / wrong " });
    }
  } catch (error) {
    console.log("error in verifyOtp controller : ", error.message);

    res.status(500).json({ message: "Internal server error ! " });
  }
};

export const newPassword = async (req, res) => {
  try {
    const { password } = req.body;
    const user = req.cookies.user

    let secret = "";
    let person;
    if (user.type == "student") {
      secret = process.env.JWT_SECRET_STUDENT;
      person = Student;
    } else if (user.type == "teacher") {
      secret = process.env.JWT_SECRET_TEACHER;
      person = Teacher;
    } else {
      secret = process.env.JWT_SECRET_PRINCIPAL;
      person = Principal;
    }
    const info = jwt.verify(user.token, secret);
    
     const data  = await person.findOne({email:info.email})  

        // res.status(404).json({message:"sorry we can not find any user with this email"})
      if(data){
        const hashPass =  bcrypt.hashSync(password, 10)
        const updated =  await person.findOneAndUpdate({email:info.email},{password:hashPass})
        // console.log(updated);
        res.status(200).json({message:"Your password has changed successfully ! "})
      }else{
        res.status(200).json({message:" "})
      }
     
 
  } catch (error) {
    console.log("error in newPassword controller : ", error.message);
    res.status(500).json({ message: "Internal server error ! " });
  }
};
