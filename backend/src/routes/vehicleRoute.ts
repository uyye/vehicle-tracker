import express from 'express';
import VehicleController from '../controllers/vehicle.controller';
const router = express.Router();

 router.get('/', VehicleController.vehicleData)
 router.get('/:id/status', VehicleController.vehicleDetail)

export default router