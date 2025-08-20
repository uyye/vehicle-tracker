import {Request, Response, NextFunction} from "express"

const authentication = (req:Request, res:Response, next:NextFunction)=>{

    const { authorization} = req.headers;
    if(!authorization){
        throw{name: "AuthenticationError", message: "Authorization header is missing", status: 401}
    }

}

export default authentication