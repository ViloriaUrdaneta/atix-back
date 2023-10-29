import { Router } from "express";
import { getDoctors, createDoctor, updateDoctor, deleteDoctor } from "../controllers/doctors.controller.js";
import { isUserAuthenticated } from "../middlewares/isAuthenticated.js";
import { isAdmin } from "../middlewares/isAdmin.js";

const router = Router();

router.get('/doctors', isUserAuthenticated, isAdmin, getDoctors);
router.post('/doctors', isUserAuthenticated, isAdmin, createDoctor);
router.put('/doctors/:id', isUserAuthenticated, isAdmin, updateDoctor);
router.delete('/doctors/:id', isUserAuthenticated, isAdmin, deleteDoctor);

export default router;