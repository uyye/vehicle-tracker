import express  from "express";
import authRouter from "./auth"
import vehicleRouter from './vehicleRoute'
import userRouter from './user'
import reportRouter from './report'

const router = express.Router();

router.use('/auth', authRouter )
router.use('/users', userRouter)
router.use('/vehicles', vehicleRouter)
router.use('/reports', reportRouter)

export default router
