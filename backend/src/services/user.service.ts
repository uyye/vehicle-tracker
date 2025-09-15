import db from "../models";
import { UserAttributes } from "../types/user";
import { verifyToken } from "../utils/jsonwebtoken";

const { User } = db;

class UserService {
  static async getProfile(authorization: string) {
      const token = authorization.split(" ")[1];
      const decoded = await verifyToken(token);
      if(!decoded){
        throw{name:'unauthorized', message:'Invalid credential', status:401}
      }
      const data = await User.findByPk(decoded.id,{
        attributes:{exclude:['password']}
      });
      return data;
  }

  static async deleteUserById(id: number) {
    console.log('MASUK SERVICE DELETED');
    
    if (!id) {
      throw { name: "BadRequest", message: "invalid id user", status: 400 };
    }

    const user = await User.findByPk(id);
    if (!user) {
      throw { name: "NotFound", message: `User with id ${id} NotFound` };
    }

    const destroy = await User.destroy({ where: { id: user.id } });
    return { message: `User deleted successfully` };
  }

  static async updateUser(id: number, attributes: Omit<UserAttributes, 'id' | 'role' | 'password'>) {
    const { email, username, } = attributes;
    if (!email || !username) {
      throw { name: "BadRequest", message: "User attributes are required", status:400 };
    }

    if (!id) {
      throw { name: "BadRequest", message: "invalid id user", status: 400 };
    }

    const user = await User.findByPk(id);
    if (!user) {
      throw { name: "NotFound", message: `User with id ${id} NotFound` };
    }

    user.update({ email, username });
    return { message: `User updated successfuly` };
  }
}

export default UserService;
