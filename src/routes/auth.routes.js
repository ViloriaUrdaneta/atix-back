import { Router } from "express";
import { validateReqSchema } from "../middlewares/validateReqSchema.js";
import { authReqSchema } from "../utils/authReqShemas.js";
import { register, login } from "../controllers/auth.controller.js"

const router = Router();

router.post('/auth/register', validateReqSchema(authReqSchema), register);
router.post('/auth/login', validateReqSchema(authReqSchema), login);

export default router;