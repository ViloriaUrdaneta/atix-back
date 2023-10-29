import { Doctor } from "../models/Doctor.js";
import { Question } from "../models/Question.js"
import { createDoctors } from "../utils/testingData/testDoctors.js";
import { createQuestions } from "../utils/testingData/testQuestions.js";

export const initialData = async () => {
    
    const questions = await Question.findAll();
    if(questions.length < 1){
        createQuestions();
    }
    const doctors = await Doctor.findAll();
    if(doctors.length < 1){
        createDoctors();
    }
}