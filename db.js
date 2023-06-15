import dotenv from 'dotenv/config'; 
import Sequelize from 'sequelize'

const sequelize = new Sequelize (
    process.env.DB_NAME,//название БД
    process.env.DB_USER,//имя пользователя
    process.env.DB_PASSWORD,//пароль
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)

export default sequelize