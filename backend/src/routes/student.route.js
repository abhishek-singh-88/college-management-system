import express from 'express'
import {studentLogin, studentSignup, updateStudent, deleteStudent, getStudents, studentLogout} from '../controllers/student.controller.js'


const router = express.Router()


router.post('/student/signup', studentSignup)
router.post('/student/login', studentLogin)
router.post('/student/logout', studentLogout)
router.get('/student/get-students', getStudents)


// admin control Or principal controll
router.patch('/student/update/:_id', updateStudent)
router.delete('/student/delete/:_id', deleteStudent)

export default router

