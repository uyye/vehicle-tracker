import { Model, Sequelize, Optional, DataTypes } from "sequelize";
import { TripAttributes } from "../types/trip";

type TripCreationAttributes = Optional<
  TripAttributes,
  "id" | "createdAt" | "updatedAt"
>;

class Trip
  extends Model<TripAttributes, TripCreationAttributes>
  implements TripAttributes
{
  public id!: number;
  public vehicle_id!: number;
  public start_time!: Date;
  public end_time!: Date;
  public status!: string;
  public readonly createdAt!: Date | undefined;
  public readonly updatedAt!: Date | undefined;

  static associate(models: any) {
    Trip.belongsTo(models.Vehicle, {foreignKey:'vehicle_id'})
  }

  static initModel(sequelize: Sequelize): typeof Trip {
    Trip.init(
      {
        id:{
          type:DataTypes.INTEGER,
          autoIncrement:true,
          primaryKey:true
        },
        vehicle_id: {
          type: DataTypes.INTEGER,
        },
        start_time: {
          type: DataTypes.DATE,
        },
        end_time: {
          type: DataTypes.DATE,
        },
        status: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "Trip",
        tableName: "Trips",
        timestamps:true
      }
    );
    return Trip;
  }
}

export default Trip;