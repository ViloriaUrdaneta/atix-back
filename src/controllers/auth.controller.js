import { createUser, loginUser } from "../services/auth.services.js";
import { endpointResponse, endpointErrorResponse } from "../utils/endpointResponse.js";
import { StatusCodes } from 'http-status-codes';

export const register =  async (req, res) => {

    const { email, password, role } = req.body;
    try {
        const token = await createUser({email, password, role});
        endpointResponse({
            res,
            statusCode: StatusCodes.CREATED,
            message: "User successfully created",
            body: token
        });
    } catch (error) {
        endpointErrorResponse({
            res,
            statusCode: StatusCodes.BAD_REQUEST,
            message: "Failed user creation",
            error
        });
    };
};

export const login = async (req, res) => {

    const { email, password } = req.body;
    try {
        const token = await loginUser({email, password});
        endpointResponse({
            res,
            statusCode: StatusCodes.OK,
            message: "User successfully loged",
            body: token
        });
    } catch (error) {
        endpointErrorResponse({
            res,
            statusCode: StatusCodes.UNAUTHORIZED,
            message: "Failed user login",
            error
        });
    };
};