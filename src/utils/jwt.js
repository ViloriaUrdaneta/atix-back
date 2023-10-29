import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET_KEY = process.env.SECRET || 'default_jwtsecret'

export const createJWT = (payload) => {
    const signOptions = {
        algorithm: 'HS512',
        expiresIn: '7d'
    }

    return jwt.sign(payload, JWT_SECRET_KEY, signOptions)
}

export const verifyJWT = (token) => {
    return jwt.verify(token, JWT_SECRET_KEY)
}