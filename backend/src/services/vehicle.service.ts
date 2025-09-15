import db from "../models";
import { VehicleQuery } from "../types/vahicle";
import { FindOptions, Op } from "sequelize";

const { Vehicle } = db;
const { Trip } = db;

class VehicleService {
  static async vehicleData(vehicleQuery:VehicleQuery) {
    let options: FindOptions = { where: {}, order: [["createdAt", "desc"]] };

    if (vehicleQuery.page) {
      options.limit = 10;
      options.offset = (vehicleQuery.page - 1) * 10;
    }

    if(vehicleQuery.search){
      options.where = {
        [Op.or]:[
          {plat_number:{[Op.iLike]: `%${vehicleQuery.search}%`}},
          {model:{[Op.iLike]: `%${vehicleQuery.search}%`}},
          {status:{[Op.iLike]: `%${vehicleQuery.search}%`}}
        ]
      }
    }

    const { rows: data, count: total } = await Vehicle.findAndCountAll(options);
    return {
      data,
      pagination: { total, page:vehicleQuery.page, totalPages: Math.ceil(total / 10) },
    };
  }

  static async vehicleDatail(id: number, date?: string) {
    const startOfDay = new Date(date + "T00:00:00.000Z");
    const endOfDay = new Date(date + "T23:59:59.999Z");

    const data = await Vehicle.findByPk(id, {
      include: [
        {
          model: Trip,
          where: {
            [Op.or]: [
              { start_time: { [Op.between]: [startOfDay, endOfDay] } },
              { end_time: { [Op.between]: [startOfDay, endOfDay] } },
              {
                [Op.and]: [
                  { start_time: { [Op.lte]: startOfDay } },
                  { end_time: { [Op.gte]: endOfDay } },
                ],
              },
            ],
          },
          required: false,
        },
      ],
    });

    if (!data)
      throw { name: "NotFound", message: "Vehicle not found", status: 404 };
    return data;
  }
}

export default VehicleService;
