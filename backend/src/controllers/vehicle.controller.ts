import { Request, Response, NextFunction } from "express";
import VehicleService from "../services/vehicle.service";
import { VehicleQuery } from "../types/vahicle";

class VehicleController {
  static async vehicleData(req: Request, res: Response, next: NextFunction) {
    try {
      const { page, search } = req.query;
      const vehicleQuery:VehicleQuery ={
        page: Number(page),
        search: search?.toString()
      } 
      const data = await VehicleService.vehicleData(vehicleQuery);
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async vehicleDetail(req: Request, res: Response, next: NextFunction) {
    try {

      
      const { id } = req.params;
      const {date} = req.query
      const targetDate = ( date as string) ?? new Date().toISOString().split("T")[0]

      const data = await VehicleService.vehicleDatail(Number(id), targetDate);
      res.status(200).json(data);
      
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

}

export default VehicleController;
