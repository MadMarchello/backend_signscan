import express from 'express'
import sequelize from './db.js';
import { Barcode } from './models/Barcodes.entity.js'
import { Users } from './models/Users.entity.js';

import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import * as AdminJSSequelize from '@adminjs/sequelize'
import { locales as AdminJSLocales } from 'adminjs'
import * as russian_language from './locale/rus/translation.json' assert { type: "json" }
const DEFAULT_ADMIN = {
    email: "admin@signcode.ru",
    password: "signcode-db_2023_#"
}

const authenticate = async (email, password) => {
    if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
        return Promise.resolve(DEFAULT_ADMIN)
    }
    return null
}
//todo: сделать защиту
// сделать кастомный дизайн
AdminJS.registerAdapter({
    Resource: AdminJSSequelize.Resource,
    Database: AdminJSSequelize.Database,
})

const PORT = process.env.PORT || 5000
const app = express();
const rus = JSON.parse(JSON.stringify(russian_language)).default;

console.log(rus);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        const adminOptions = {
            resources: [Barcode],
            locale: { 
                language: 'ru', // default language of application (also fallback)
                localeDetection: true,
                availableLanguages: ['en', 'ru'],
                translations: {
                    ru: rus
                }
              }
        }
        const admin = new AdminJS(adminOptions);
        const adminRouter = AdminJSExpress.buildRouter(admin)
        app.use(admin.options.rootPath, adminRouter);
        app.listen(PORT, () => console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`));
    } catch (error) {
        console.log("------------------")
        console.log("Unable connect to DB");
        console.log(error);
    }
}

start();