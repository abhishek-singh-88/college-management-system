import express from 'express'

import {teacherLogin, teacherSignup, updateTeacher, deleteTeacher} from '../controllers/teacher.controller.js'


const router = express.Router()


router.post('/teacher/signup', teacherSignup)
router.post('/teacher/login', teacherLogin)


// admin control Or principal controll
router.post('/teacher/update/:_id', updateTeacher)
router.post('/teacher/delete/:_id', deleteTeacher)

export default router

