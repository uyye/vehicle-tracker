import express from 'express'
import UserController from '../controllers/user.controller'
const router = express.Router()

router.get('/profile', UserController.getProfile)
router.put('/update/:id', UserController.updateUserById)
router.delete('/delete/:id', UserController.deleteUserById)

export default router