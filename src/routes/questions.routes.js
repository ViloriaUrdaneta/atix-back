import { Router } from "express";
import { createQuestions, getQuestions, getFiveQuestions, updateQuestion, deleteQuestion } from "../controllers/questions.controller.js";
import { isUserAuthenticated } from "../middlewares/isAuthenticated.js";
import { isAdmin } from "../middlewares/isAdmin.js";

const router = Router();

router.get('/fiveQuestions', isUserAuthenticated, getQuestions);
router.get('/questions', isUserAuthenticated, isAdmin, getQuestions);
router.post('/questions', isUserAuthenticated, isAdmin, createQuestions);
router.put('/questions/:id', isUserAuthenticated, isAdmin, updateQuestion);
router.delete('/questions/:id', isUserAuthenticated, isAdmin, deleteQuestion);

export default router;