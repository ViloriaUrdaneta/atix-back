import express from 'express';
import cors from 'cors';
import questionsRoutes from './routes/questions.routes.js';
import authRoutes from './routes/auth.routes.js';
import patientRoutes from './routes/patients.routes.js';
import appoinmentRoutes from './routes/appointments.routes.js';
import doctorRoutes from './routes/doctors.routes.js'

const app = express();

app.use(express.json());
app.use(cors());
app.use(authRoutes);
app.use(questionsRoutes);
app.use(patientRoutes);
app.use(appoinmentRoutes);
app.use(doctorRoutes);

export default app;