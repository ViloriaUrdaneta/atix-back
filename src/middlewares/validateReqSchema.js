import { validationResult } from "express-validator";
import { endpointErrorResponse } from "../utils/endpointResponse.js";
import { StatusCodes } from 'http-status-codes';

export const validateReqSchema = (validations) => {
    return async (req, res, next) => {
        await Promise.all(validations.map((validation) => validation.run(req)));

        const errors = validationResult(req);
        if(errors.isEmpty()){
            return next();
        };

        endpointErrorResponse({
            res,
            message: 'Invalid data',
            statusCode: StatusCodes.BAD_REQUEST,
            errors: errors.mapped()
        })

    }
}