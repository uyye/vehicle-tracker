'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username:{
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          msg: 'Username cannot be empty'
        },
        notNull:{
          msg: 'Username is required'
        }
      }
    },
    email: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
      validate:{
        isEmail:{
          msg: 'Must be a valid email address'
        },
        notEmpty:{
          msg: 'Email cannot be empty'
        },
        notNull:{
          msg: 'Email is required'
        },
        
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          msg: 'password cannot be empty'
        },
        notNull:{
          msg: 'password is required'
        },
        len:{
          args: [6],
          msg: 'Password must be at least 6 characters long'
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          msg: 'Role cannot be empty'
        },
        notNull:{
          msg: 'Role is required'
        }
      }
    },
    createdAt: DataTypes.DATE,
    updatedAt:DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};