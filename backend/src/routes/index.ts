import express  from "express";
import vehicleRoute from "./vehicleRoute"
import tripRoute from "./tripRoute"

const router = express.Router();

router.use('/vehicle', vehicleRoute)
router.use('/trip', tripRoute)

export default router
