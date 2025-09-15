import { Request, Response, NextFunction } from "express";
import UserService from "../services/user.service";

class UserController {
  static async getProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const { authorization } = req.headers;
      const data = await UserService.getProfile(authorization as string);
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async deleteUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const data = await UserService.deleteUserById(Number(id));
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async updateUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, username } = req.body;
      const { id } = req.params;

      const data = await UserService.updateUser(Number(id), {
        email,
        username,
      });
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

export default UserController;
