import { Model, DataTypes, Optional, Sequelize } from "sequelize";
import { VehicleAttributes } from "../types/vahicle";

type VehicleCreationAttributes = Optional<
  VehicleAttributes,
  "id" | "createdAt" | "updatedAt"
>;

class Vehicle
  extends Model<VehicleAttributes, VehicleCreationAttributes>
  implements VehicleAttributes
{
  public id!: number;
  public plat_number!: string;
  public model!: string;
  public status!: string;
  public readonly createdAt?: Date | undefined;
  public readonly updatedAt?: Date | undefined;

  static associate(models: any) {
    Vehicle.hasMany(models.Trip, {foreignKey:'vehicle_id'})
  }

  static initModel(sequelize: Sequelize): typeof Vehicle {
    Vehicle.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        plat_number: {
          type: DataTypes.STRING,
        },
        model: {
          type: DataTypes.STRING,
        },
        status: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "Vehicle",
        tableName: "Vehicles",
        timestamps:true
      }
    );

    return Vehicle;
  }
}

export default Vehicle;
