import sequelize from "../db.js";
import { DataTypes } from 'sequelize';


export const Users = sequelize.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING
    },
    role:
    {
        type: DataTypes.STRING
    },
    password:
    {
        type: DataTypes.STRING
    }
})