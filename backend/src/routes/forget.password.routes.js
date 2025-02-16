import express from 'express'
import { principalForget, studentForget, teacherForget } from '../controllers/forget.controller.js'



const router = express.Router()

router.post('/send-otp', sendOtp)
router.post('/verify-otp', verifyOtp)



export default router



