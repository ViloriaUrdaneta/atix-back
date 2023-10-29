import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";
import { Doctor } from "./Doctor.js";
import { User } from "./User.js";

export const Appointment = sequelize.define('appointments', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date: {
        type: DataTypes.DATE
    },
    due: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    patientId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    doctorId: {
        type: DataTypes.INTEGER,
        references: {
            model: Doctor,
            key: 'id'
        }
    }
});

Appointment.belongsTo(User, { as: 'patient', foreignKey: 'patientId' });

Appointment.belongsTo(Doctor, { as: 'doctor', foreignKey: 'doctorId' });

