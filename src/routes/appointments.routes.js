import { Router } from "express";
import { createAppointment, getAppointment, getAppointments} from '../controllers/appointment.controller.js';
import { isUserAuthenticated } from "../middlewares/isAuthenticated.js";
import { isAdmin } from '../middlewares/isAdmin.js'

const router = Router();

router.get('/dates', isUserAuthenticated, isAdmin, getAppointments);
router.post('/dates', isUserAuthenticated, createAppointment);
router.get('/dates/:id', isUserAuthenticated, getAppointment);

export default router;