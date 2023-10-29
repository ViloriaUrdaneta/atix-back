import { verifyJWT } from "../utils/jwt.js";
import { endpointErrorResponse } from "../utils/endpointResponse.js";
import { StatusCodes } from 'http-status-codes';

const getTokenFromRequest = (request) => {
    const authorization = request.headers['authorization']
    const token = authorization ? authorization.substring(7) : null
    return token
}

export const isUserAuthenticated = (req, res, next) => {
    try {
        const token = getTokenFromRequest(req)
        const user = verifyJWT(token);
        if (user.id) {
            req.user = user
            return next()
        }
    } catch (error) {
        endpointErrorResponse({
            res,
            message: 'User not authenticated',
            statusCode: StatusCodes.UNAUTHORIZED,
            error
        })
    }
}
