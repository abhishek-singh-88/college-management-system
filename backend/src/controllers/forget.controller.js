import sendMail from "../container/otp.js";
import jwt from "jsonwebtoken";
import Student from "../models/student.model.js";
import Principal from "../models/principal.model.js";
import Teacher from "../models/teacher.model.js";
import bcrypt from 'bcryptjs'

export const sendOtp = async (req, res) => {
  try {
    const { mode } = req.body;
    const token = req.cookies.token;
    let secret = "";
    let person;
    if (mode == "student") {
      secret = process.env.JWT_SECRET_STUDENT;
      person = Student;
    } else if (mode == "teacher") {
      secret = process.env.JWT_SECRET_TEACHER;
      person = Teacher;
    } else {
      secret = process.env.JWT_SECRET_PRINCIPAL;
      person = Principal;
    }
    const info = jwt.verify(token, secret);
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
    const { otp, mode } = req.body;

    let secret = "";
    let person;
    if (mode == "student") {
      secret = process.env.JWT_SECRET_STUDENT;
      person = Student;
    } else if (mode == "teacher") {
      secret = process.env.JWT_SECRET_TEACHER;
      person = Teacher;
    } else {
      secret = process.env.JWT_SECRET_PRINCIPAL;
      person = Principal;
    }
    const info = jwt.verify(token, secret);
    let data = person.findOne({ email: info.email });
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
    const { email, password, mode } = req.body;
    let person;
    if (mode == "student") {
      person = Student;
    } else if (mode == "teacher") {
      person = Teacher;
    } else {
      person = Principal;
    }
    let user = await person.find({email})
    if(!user){
        res.status(404).json({message:"sorry we can not find any user with this email"})
    }else{
       const hashPass =  bcrypt.hashSync(password, 10)
       await person.updateOne({email}, {password:hashPass})
        res.status(200).json({message:"Your password has changed successfully ! "})
    }
  } catch (error) {
    console.log("error in newPassword controller : ", error.message);
    res.status(500).json({ message: "Internal server error ! " });
  }
};
