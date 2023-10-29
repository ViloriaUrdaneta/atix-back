import { Router } from "express";
import { onboardPatient } from "../controllers/patients.controller.js";
import { isUserAuthenticated } from "../middlewares/isAuthenticated.js";

const router = Router();

router.put('/patients/:id', isUserAuthenticated, onboardPatient);

export default router;