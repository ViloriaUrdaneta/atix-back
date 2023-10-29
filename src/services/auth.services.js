import { User } from "../models/User.js";
import { comparePassword, hashPassword } from "../utils/hashPassword.js";
import { createJWT } from "../utils/jwt.js";
import { StatusCodes } from 'http-status-codes';
import { ErrorObject } from "../utils/error.js";

export const createUser = async ( newUserData ) => {
    const userExist = await User.findOne({ where: { email : newUserData.email } })
    if (userExist) {
        throw new ErrorObject('User email already exists', StatusCodes.CONFLICT)
    };
    const hashedPassword = hashPassword(newUserData.password);
    const user = await User.create({ email: newUserData.email, password: hashedPassword, role: newUserData.role });
    const token = createJWT({
        id: user.id,
        email: user.email,
        role: user.role
    })
    return token;
};

export const loginUser = async ( userData ) => {
    const user = await User.findOne({ where: { email: userData.email } })
    if (!user) {
        throw new ErrorObject('User not found', StatusCodes.NOT_FOUND)
    };
    const correctPassword = comparePassword(userData.password, user.password) 
    if(!correctPassword){
        throw new ErrorObject('Incorrect password', StatusCodes.CONFLICT)
    }
    const token = createJWT({
        id: user.id,
        email: user.email,
        role: user.role
    })
    return token;
};