const { Sequelize } = require('sequelize');
require('dotenv').config();

let sequelizeInstance = null;

function getSequelizeInstance() {
    if (!sequelizeInstance) {
        sequelizeInstance = new Sequelize(
            process.env.DB_NAME,
            process.env.DB_USER,
            process.env.DB_PASSWORD,
            {
                host: process.env.DB_HOST,
                dialect: 'mysql',
                pool: {
                    max: 10, // Adjust the maximum number of connections as needed
                    min: 0,
                    acquire: 30000,
                    idle: 10000
                }
            }
        );
    }
    return sequelizeInstance;
}

(async () => {
    try {
        const sequelize = getSequelizeInstance();
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

module.exports = getSequelizeInstance();
