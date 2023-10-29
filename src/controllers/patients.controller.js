import { User } from "../models/User.js"
import { endpointResponse, endpointErrorResponse } from "../utils/endpointResponse.js";
import { StatusCodes } from 'http-status-codes';

export const onboardPatient = async (req, res) => {

    const { name, lastname, city } = req.body
    const id = req.params.id
    try {
        const user = await User.findOne({ where: { id } })
        user.name = name;
        user.lastname =lastname;
        user.city = city;
        await user.save();
        endpointResponse({
            res,
            statusCode: StatusCodes.OK,
            message: "User patient updated",
            body: user
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

