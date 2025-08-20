import * as jwt from 'jose';

const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY)
const alg = 'HS256'

export const signToken = async (payload: jwt.JWTPayload)=>{
    return new jwt.SignJWT(payload)
    .setIssuedAt()
    .setProtectedHeader({alg})
    .sign(secret)
}

export const verifyToken = async <T>(token: string) => {
    const {payload} = await jwt.jwtVerify<T>(token, secret)
    return payload
}