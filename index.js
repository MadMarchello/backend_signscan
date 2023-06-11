import dotenv from 'dotenv/config';
import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import express from 'express'
import sequelize from './db.js';

const PORT = process.env.PORT || 5000
const app = express();

const start = async() => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
    } catch (error) {
        console.log(error);
    }
}

start();