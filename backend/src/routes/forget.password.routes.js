import express from 'express'
import {  newPassword, sendOtp,  verifyOtp } from '../controllers/forget.controller.js'



const router = express.Router()

router.post('/send-otp', sendOtp)
router.post('/verify-otp', verifyOtp)                           
router.patch('/forget-password', newPassword )



export default router



