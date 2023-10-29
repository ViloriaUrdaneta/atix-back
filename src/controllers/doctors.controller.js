import { Doctor } from "../models/Doctor.js";
import { endpointResponse, endpointErrorResponse } from "../utils/endpointResponse.js";
import { StatusCodes } from 'http-status-codes';

export const getDoctors = async (req, res) => {
    
    try {
        const allDoctors = await Doctor.findAll();
        endpointResponse({
            res,
            statusCode: StatusCodes.CREATED,
            message: "Doctors successfully created",
            body: allDoctors
        });
    } catch (error) {
        endpointErrorResponse({
            res,
            statusCode: StatusCodes.BAD_REQUEST,
            message: "Failed doctors search",
            error
        });
    };
};


export const createDoctor = async (req, res) => {

    const { name, lastname, rank } = req.body;
    console.log(name, lastname, rank)
    try {
        const newDoctor = await Doctor.create({ name, lastname, rank });
        endpointResponse({
            res,
            statusCode: StatusCodes.CREATED,
            message: "Doctor successfully created",
            body: newDoctor
        });
    } catch (error) {
        endpointErrorResponse({
            res,
            statusCode: StatusCodes.BAD_REQUEST,
            message: "Failed doctor creation",
            error
        });
    };
};


export const updateDoctor = async (req, res) => {

    const { name, lastname, rank } = req.body;
    const id = req.params.id;
    try {
        const doctor = await Doctor.findByPk(id);
        if (!doctor) {
            endpointErrorResponse({
                res,
                statusCode: StatusCodes.NOT_FOUND,
                message: 'Doctor not found',
            });
            return;
        };
        doctor.name = name;
        doctor.lastname =lastname;
        doctor.rank = rank;
        await doctor.save();
        endpointResponse({
            res,
            statusCode: StatusCodes.CREATED,
            message: "Doctor successfully updated",
            body: doctor
        });
    } catch (error) {
        endpointErrorResponse({
            res,
            statusCode: StatusCodes.BAD_REQUEST,
            message: "Failed doctor updated",
            error
        });
    };
};


export const deleteDoctor = async (req, res) => {

    const id = req.params.id;
    try {
        const doctor = await Doctor.findByPk(id);
        if (!doctor) {
            endpointErrorResponse({
                res,
                statusCode: StatusCodes.NOT_FOUND,
                message: 'Doctor not found',
            });
            return;
        };
        await doctor.destroy();
        endpointResponse({
            res,
            statusCode: StatusCodes.OK,
            message: 'Doctor successfully deleted',
        });
        } catch (error) {
        endpointErrorResponse({
            res,
            statusCode: StatusCodes.BAD_REQUEST,
            message: 'Failed to delete doctor',
            error,
        });
    };
};