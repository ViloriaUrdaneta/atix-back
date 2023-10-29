import { Question } from "../../models/Question.js";

const questios = [
    {
        question: "¿Tiene dolor de cabeza?",
        answer1: "No",
        answer2: "Un poco",
        answer3: "Mucho",
    },
    {
        question: "¿Tiene la visión nítida?",
        answer1: "Sí",
        answer2: "Veo un poco borroso",
        answer3: "No puedo ver",
    },
    {
        question: "¿Tiene dolor de estomago?",
        answer1: "No",
        answer2: "Me duele un poco",
        answer3: "Me duele Mucho",
    },
    {
        question: "¿Se siente mareado?",
        answer1: "No",
        answer2: "Un poco",
        answer3: "Mucho",
    },
    {
        question: "¿Qué nivel de malestar tiene?",
        answer1: "Poco",
        answer2: "Mediano",
        answer3: "Mucho",
    },
]

export const createQuestions = async () => {
    for (const ques of questios) {
        try {
            const question = await Question.create({
            question: ques.question,
            answer1: ques.answer1,
            answer2: ques.answer2,
            answer3: ques.answer3
            });
            console.log('Question initial data loaded');
        } catch (error) {
            console.error('Error creating question:', error);
        }
    }
};