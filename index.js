import dotenv from 'dotenv/config';
import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import express from 'express'
import sequelize from './db.js';
import * as AdminJSSequelize from '@adminjs/sequelize'
import { Barcode } from './models/Barcodes.entity.js'

//import { Barcode } from './models/Barcodes.js';

AdminJS.registerAdapter({
    Resource: AdminJSSequelize.Resource,
    Database: AdminJSSequelize.Database,
})

const PORT = process.env.PORT || 5000
const app = express();

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        const adminOptions = {
            resources: [Barcode],
        }
        const admin = new AdminJS(adminOptions);
        const adminRouter = AdminJSExpress.buildRouter(admin)
        app.use(admin.options.rootPath, adminRouter);
        app.listen(PORT, () => console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`));
    } catch (error) {
        console.log("Unable connect to DB");
    }
}

start();