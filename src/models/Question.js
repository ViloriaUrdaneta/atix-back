import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

export const Question = sequelize.define('questions', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    question: {
        type: DataTypes.STRING
    },
    answer1 : {
        type: DataTypes.STRING
    },
    answer2 : {
        type: DataTypes.STRING
    },
    answer3 : {
        type: DataTypes.STRING
    }
});