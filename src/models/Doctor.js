import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

export const Doctor = sequelize.define('doctors', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    lastname: {
        type: DataTypes.STRING
    },
    rank: {
        type: DataTypes.ENUM,
        values : ['Médico pasante', 'Médico residente', 'Médico adscrito', 'Jefe de Servicio']
    }
});



