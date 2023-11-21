import express from 'express'
import cors from 'cors'
import sequelize from './db.js';
import Barcode from './models/Barcodes.entity.js'
import barcodeController from './controllers/barcodeController.js';
import ErrorHandlingMiddleware from './middleware/ErrorHandlingMiddleware.js';



import AdminJS, { Dashboard } from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import * as AdminJSSequelize from '@adminjs/sequelize'
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

const rus = JSON.parse(JSON.stringify(russian_language)).default;
const PORT = process.env.PORT || 5000

const app = express();
app.use(cors());
app.use(express.json()); //req.body

app.get("/barcode", barcodeController.getBarcode);
app.use(ErrorHandlingMiddleware);

const start = async () => {

    try {
        await sequelize.authenticate();
        await sequelize.sync();
        const adminOptions = {
            rootPath: "/admin",
            resources: [Barcode],
            locale: {
                language: 'ru',
                localeDetection: true,
                availableLanguages: ['en', 'ru'],
                translations: {
                    ru: rus
                }
            }
        }
        const admin = new AdminJS(adminOptions);
        admin.watch();

        //todo: вынести в отдельный модуль аутентификацию
        const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
            admin,
            {
                authenticate,
                cookieName: 'adminjs',
                cookiePassword: 'sessionsecret',
            }
        )
        app.use(admin.options.rootPath, adminRouter);
        app.listen(PORT, () => console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`));
    } catch (error) {
        console.log("------------------")
        console.log(error);
    }
}
start();