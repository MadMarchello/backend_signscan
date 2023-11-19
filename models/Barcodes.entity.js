import sequelize from "../db.js";
import { DataTypes } from 'sequelize';


const Barcode = sequelize.define('Barcode', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    code: {
        type: DataTypes.STRING
    },
    url:
    {
        type: DataTypes.STRING
    }
})

export default Barcode;