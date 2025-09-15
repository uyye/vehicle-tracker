import { Model, DataTypes, Sequelize, Optional } from "sequelize";

import { UserAttributes } from "../types/user";
import { hashPassword } from "../utils/bcrypt";

type UserCreationAttributes = Optional<
  UserAttributes,
  "id" | "createdAt" | "updatedAt"
>;

class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public role!: string;
  public readonly createdAt!: Date | undefined;
  public readonly updatedAt!: Date | undefined;

  static associate(models: any) {}

  static initModel(sequelize: Sequelize): typeof User {
    User.init(
      
      {
        id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
        username: {
          type:DataTypes.STRING,
          allowNull:false,
          validate:{
            notEmpty:{
              msg:'Username is required'
            },
            notNull:{
              msg:'Username is required'
            }
          }
        },
        email: {
          type: DataTypes.STRING,
          allowNull:false,
          unique:true,
          validate:{
            notEmpty:{
              msg:'Email is required'
            },
            notNull:{
              msg:'Email is required'
            },
            isEmail:{
              msg:'Invalid email format'
            },
          }
        },
        password: {
          type: DataTypes.STRING,
          allowNull:false,
          validate:{
            notEmpty:{
              msg:'Password is required'
            },
            notNull:{
              msg:'Password is required'
            }
          }
        },
        role: {
          type: DataTypes.STRING,
          allowNull:false,
          defaultValue:'user',
          validate:{
            notEmpty:{
              msg:'Role is required'
            },
            notNull:{
              msg:'Role is required'
            }
          }
        },
      },
      {
        sequelize,
        modelName: "User",
        tableName: "Users",
        timestamps: true
      }
    );
    User.beforeCreate(async(user, option)=>{
      user.password = hashPassword(user.password)
    })
    return User;
  }
}

export default User;