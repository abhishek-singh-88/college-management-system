import express from 'express'
import { deletePrincipal, principalLogin, principalSignup, updatePrincipal } from '../controllers/principal.controller.js'


const router = express.Router()


router.post('/principal/signup', principalSignup)
router.post('/principal/login', principalLogin)


// admin control Or principal controll
router.post('/principal/update/:_id', updatePrincipal)
router.post('/principal/delete/:_id', deletePrincipal)

export default router

