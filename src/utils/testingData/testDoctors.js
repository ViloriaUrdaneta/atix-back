import { Doctor } from "../../models/Doctor.js"

const doctors = [
    {
        name: "Miguel",
        lastname: "Viloria",
        rank: 'Médico pasante'
    },
    {
        name: "Pedro",
        lastname: "Pérez",
        rank: 'Médico pasante'
    },
    {
        name: "Angela",
        lastname: "Gómez",
        rank: 'Médico residente'
    },
    {
        name: "Andreina",
        lastname: "González",
        rank: 'Jefe de Servicio'
    }
]

export const createDoctors = async () => {
    for (const doc of doctors) {
        try {
            const doctor = await Doctor.create({
            name: doc.name,
            lastname: doc.lastname,
            rank: doc.rank
            });
            console.log('Doctor initial data loaded');
        } catch (error) {
            console.error('Error creating doctor:', error);
        }
    }
};