'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Vehicle.hasMany(models.Trip, {foreignKey: 'vehicle_id'})
    }
  }
  Vehicle.init({
    plat_number: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          msg:'Plat number cannot be empty'
        },
        notNull:{
          msg:'Plat number is required'
        }
      }
    },
    model: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          msg:"Model cannot be empty"
        },
        notNull:{
          msg:'Model is required'
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
    modelName: 'Vehicle',
  });
  return Vehicle;
};