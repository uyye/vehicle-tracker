import {Request, Response, NextFunction} from 'express'
import AuthService from '../services/auth.service';

class AuthController{
    static async login(req:Request, res:Response, next:NextFunction){
        try {
            const {email, password} = req.body
            const data = await AuthService.login(email, password, 'user')
            res.status(200).json({token:data})
        } catch (error) {
            next(error)  
        }
    }

    static async register(req:Request, res:Response, next:NextFunction){
        try {
            const {email, username, password} = req.body;
            const data = await AuthService.register({email, username, password})
            res.status(201).json(data)
        }catch(error){
            next(error)
        }
    }
}

export default AuthController;