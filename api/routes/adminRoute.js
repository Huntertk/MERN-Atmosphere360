import {Router} from 'express'
import { loginAdmin, logoutAdmin, registerAdmin } from '../controllers/adminController.js'


const router  = Router()

// router.post('/register', registerAdmin)
router.post('/login', loginAdmin)
router.get('/logout', logoutAdmin)

export default router