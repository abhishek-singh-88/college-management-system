import express from 'express'
import { deletePrincipal, getPrincipals, principalLogin, principalSignup, updatePrincipal } from '../controllers/principal.controller.js'


const router = express.Router()


router.post('/principal/signup', principalSignup)
router.post('/principal/login', principalLogin)


// admin control Or principal controll
router.patch('/principal/update/:_id', updatePrincipal)
router.delete('/principal/delete/:_id', deletePrincipal)
router.get('/principal/get', getPrincipals)
export default router

