import {Request, Response, NextFunction} from "express"
import { verifyToken } from "../utils/jsonwebtoken";
// import {User} from "../models/userModel";

const authentication = (req:Request, res:Response, next:NextFunction)=>{

    const { authorization} = req.headers;
    if(!authorization){
        throw{name: "AuthenticationError", message: "Authorization header is missing", status: 401}
    }

    const verify = verifyToken(authorization.split(" ")[0])
    if(!verify){
        throw{name: "AuthenticationError", message:'Invalid token', statu: 401}
    }

    // const user = 

}

export default authentication