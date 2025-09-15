import {hashSync, compareSync} from 'bcryptjs';

export const hashPassword = (password:string)=>{
    return hashSync(password, 8)
}

export const comparePassword = (password:string, hash:string)=>{
    return compareSync(password, hash)
}