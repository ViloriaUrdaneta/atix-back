import { endpointErrorResponse } from "../utils/endpointResponse.js";
import { StatusCodes } from 'http-status-codes';

export function isAdmin(req, res, next) {
    const userAuth = req.user
        if (userAuth.role !== 'admin') {
            return endpointErrorResponse({
                res,
                message: 'No tiene permisos de administrador',
                statusCode: StatusCodes.FORBIDDEN
            })
        }
    next()
}