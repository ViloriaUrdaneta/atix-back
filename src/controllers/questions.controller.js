import { Question } from "../models/Question.js"
import { endpointResponse, endpointErrorResponse } from "../utils/endpointResponse.js";
import { StatusCodes } from 'http-status-codes';
import { selectFiveQuestion } from "../services/questions.services.js";

export const getQuestions = async (req, res) => {
    try {
        const questions = await Question.findAll();
        endpointResponse({
            res,
            statusCode: StatusCodes.OK,
            message: "Questions successfully finded",
            body: questions
        });
    } catch (error) {
        endpointErrorResponse({
            res,
            statusCode: StatusCodes.UNAUTHORIZED,
            message: "Questions doesn't finded",
            error
        });
    };
};

export const getFiveQuestions = async (req, res) => {
    try {
        const questions = await Question.findAll();
        const fiveQuestion = selectFiveQuestion(questions);
        endpointResponse({
            res,
            statusCode: StatusCodes.OK,
            message: "Questions successfully finded",
            body: fiveQuestion
        });
    } catch (error) {
        endpointErrorResponse({
            res,
            statusCode: StatusCodes.UNAUTHORIZED,
            message: "Questions doesn't finded",
            error
        });
    };
};


export const createQuestions = async (req, res) => {

    const { question, answer1, answer2, answer3 } = req.body;
    try {
        const questionSaved = await Question.create({ question, answer1, answer2, answer3 });
        endpointResponse({
            res,
            statusCode: StatusCodes.OK,
            message: "Question successfully created",
            body: questionSaved
        });
    } catch (error) {
        endpointErrorResponse({
            res,
            statusCode: StatusCodes.UNAUTHORIZED,
            message: "Questions doesn't created",
            error
        });
    };
};


export const updateQuestion = async (req, res) => {

    const { question, answer1, answer2, answer3 } = req.body;
    const id = req.params.id;
    try {
        const questionFinded = await Question.findByPk(id);
        if (!questionFinded) {
            endpointErrorResponse({
                res,
                statusCode: StatusCodes.NOT_FOUND,
                message: 'Question not found',
            });
            return;
        };
        questionFinded.question = question;
        questionFinded.answer1 = answer1;
        questionFinded.answer2 = answer2;
        questionFinded.answer3 = answer3;
        await questionFinded.save();
        endpointResponse({
            res,
            statusCode: StatusCodes.CREATED,
            message: "Question successfully updated",
            body: questionFinded
        });
    } catch (error) {
        endpointErrorResponse({
            res,
            statusCode: StatusCodes.BAD_REQUEST,
            message: "Failed question updated",
            error
        });
    };
};


export const deleteQuestion = async (req, res) => {

    const id = req.params.id;
    try {
        const question = await Question.findByPk(id);
        if (!question) {
            endpointErrorResponse({
                res,
                statusCode: StatusCodes.NOT_FOUND,
                message: 'Question not found',
            });
            return;
        };
        await question.destroy();
        endpointResponse({
            res,
            statusCode: StatusCodes.OK,
            message: 'Question successfully deleted',
        });
        } catch (error) {
        endpointErrorResponse({
            res,
            statusCode: StatusCodes.BAD_REQUEST,
            message: 'Failed to delete question',
            error,
        });
    };
};
