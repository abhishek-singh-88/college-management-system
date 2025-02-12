import express from 'express'
import {studentLogin, studentSignup, updateStudent, deleteStudent} from '../controllers/student.controller.js'


const router = express.Router()


router.post('/student/signup', studentSignup)
router.post('/student/login', studentLogin)


// admin control Or principal controll
router.post('/student/update/:_id', updateStudent)
router.post('/student/delete/:_id', deleteStudent)

export default router

