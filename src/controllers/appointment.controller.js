import { Appointment } from "../models/Appointment.js";
import { Doctor } from "../models/Doctor.js";
import { User } from "../models/User.js"
import { endpointResponse, endpointErrorResponse } from "../utils/endpointResponse.js";
import { StatusCodes } from 'http-status-codes';

export const getAppointments = async (req, res) => {
    
    try {
        const appointments = await Appointment.findAll({
            include: [
                {
                    model: User, 
                    as: 'patient',
                    attributes: ['name', 'lastname'] 
                },
                {
                    model: Doctor, 
                    as: 'doctor',
                    attributes: ['name', 'lastname'] 
                }
            ]
        });
        if (!appointments) {
            endpointErrorResponse({
                res,
                statusCode: StatusCodes.NOT_FOUND,
                message: 'Dates not found',
            });
            return;
        };
        endpointResponse({
            res,
            statusCode: StatusCodes.CREATED,
            message: "Doctor successfully updated",
            body: appointments
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


export const getAppointment = async (req, res) => {
    
    const id = req.params.id;
    try {
        const appointments = await Appointment.findAll({
            where: { patientId: id },
            include: [
                {
                    model: User, 
                    as: 'patient',
                    attributes: ['name', 'lastname'] 
                },
                {
                    model: Doctor, 
                    as: 'doctor',
                    attributes: ['name', 'lastname'] 
                }
            ]
        });
        if (!appointments) {
            endpointErrorResponse({
                res,
                statusCode: StatusCodes.NOT_FOUND,
                message: 'Dates not found',
            });
            return;
        };
        endpointResponse({
            res,
            statusCode: StatusCodes.CREATED,
            message: "Doctor successfully updated",
            body: appointments
        });
    } catch (error) {
        console.log(error)
        endpointErrorResponse({
            res,
            statusCode: StatusCodes.BAD_REQUEST,
            message: "Failed doctor updated",
            error
        });
    };
};


export const createAppointment = async (req, res) => {

    const { result, patient } = (req.body);
    try {
        console.log(result)
        let doctor;
        if(result < 8){
            doctor = await Doctor.findOne({ where: { rank: 'Médico pasante'}});
        } else if(result >= 8 && result < 11){
            doctor = await Doctor.findOne({ where: { rank: 'Médico residente'}});
        } else if(result >= 11 && result < 14){
            doctor = await Doctor.findOne({ where: { rank: 'Médico adscrito'}});
        } else if(result >= 14){
            doctor = await Doctor.findOne({ where: { rank: 'Jefe de Servicio'}});
        };
        console.log(doctor)
        if(!doctor){
            endpointErrorResponse({
                res,
                statusCode: StatusCodes.NOT_FOUND,
                message: 'Doctor not found',
            });
            return;
        }
        const appointment = await Appointment.create({ patientId: patient, doctorId: doctor.id });
        endpointResponse({
            res,
            statusCode: StatusCodes.OK,
            message: "Date succesfully created",
            body: appointment
        });
    } catch (error) {
        endpointErrorResponse({
            res,
            statusCode: StatusCodes.BAD_REQUEST,
            message: "Failed date creation",
            error
        });
    };
};