'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Trip.belongsTo(models.Vehicle, {foreignKey: 'vehicle_id'})
    }
  }
  Trip.init({
    vehicle_id: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notEmpty:{
          msg:"vahicle_id cannot be empty"
        },
        notNull:{
          msg:'vahicle_id is required'
        }
      }
    },
    start_time: {
      type:DataTypes.DATE,
      allowNull:false,
      validate:{
        notEmpty:{
          msg:"Start time cannot be empty"
        },
        notNull:{
          msg:'Start time is required'
        }
      }
    },
    end_time: {
      type:DataTypes.DATE,
      allowNull:false,
      validate:{
        notEmpty:{
          msg:"end_date cannot be empty"
        },
        notNull:{
          msg:'end_date is required'
        }
      }
    },
    status: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          msg:"Status cannot be empty"
        },
        notNull:{
          msg:'Status is required'
        }
      }
    },
    createdAt: DataTypes.DATE,
    updatedAt:DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Trip',
  });
  return Trip;
};