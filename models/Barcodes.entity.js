import sequelize from "../db.js";
import { DataTypes, Model } from 'sequelize';
/*
export class Barcode extends Model {
    id;
    barcode;
    url;
}

Barcode.init(
    {
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
    }, 
    {
        sequelize,
        tableName: "Barcodes",
        modelName: "Barcode"
    }
)*/

export const Barcode = sequelize.define('Barcode', {
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

//console.log(Barcode === sequelize.models.Barcode);