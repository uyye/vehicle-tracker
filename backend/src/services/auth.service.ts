import { UserAttributes } from "../types/user";
import { comparePassword } from "../utils/bcrypt";
import { signToken } from "../utils/jsonwebtoken";
import db from "../models";

const {User} = db

class AuthService {
  static async login(email: string, password: string, role: string) {
    if (!email || !password || !role) {
      throw {name:'BadRequest', message: "Email and password are required", status: 400 };
    }
    const user = await User.findOne({ where: {email} });
    
    if (!user) {
      throw {name:'Unauthorized', message: `Invalid email or password`, status: 401 };
    }

    const compared = comparePassword(password, user.password);
    if(!compared){
        throw { name:'Unauthorized', message:'Invalid email or password', status:401}
    }
    const token = await signToken({id:user.id, role:user.role})
    return token
  }

  static async register(attributes: UserAttributes){
    const {email, username, password} = attributes;
    const user = await User.create({email, username, password})
    return user
  }
}

export default AuthService;
