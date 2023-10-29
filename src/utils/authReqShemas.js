import { body } from "express-validator";

const passwordValidations = body('password').exists().isString().isLength({ min: 6 }).withMessage('Must be at least 6 characters');

const emailValidations = body('email').exists().isEmail().withMessage('Must be in email format');

export const authReqSchema = [ emailValidations, passwordValidations]