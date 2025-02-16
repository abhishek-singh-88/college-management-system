import express from 'express'

import {teacherLogin, teacherSignup, updateTeacher, deleteTeacher, getTeachers, teacherLogout} from '../controllers/teacher.controller.js'


const router = express.Router()


router.post('/teacher/signup', teacherSignup)
router.post('/teacher/login', teacherLogin)
router.get('/teacher/get', getTeachers)
router.post('/teacher/logout', teacherLogout)


// admin control Or principal controll
router.patch('/teacher/update/:_id', updateTeacher)
router.delete('/teacher/delete/:_id', deleteTeacher)

export default router

