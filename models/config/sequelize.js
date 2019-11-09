require('dotenv').config()

module.exports = {
    developments: {
        host: process.env.DB_HOST,
        database: process.env.DB_HOST,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        dialect: 'mysql'
    }
}