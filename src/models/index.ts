import { Sequelize } from 'sequelize';
import { config } from 'dotenv';
import DivisionModel from '../models/divisionModel';

config();

const sequelize = new Sequelize(
    "daysocial",
    "newuser1",
    "Cricket@12345",
    {
        host:"127.0.0.1",
        port:3306,
        dialect: 'mysql',
        operatorsAliases: {},
        pool: {
            max:1000000,
            min: 1000,
            acquire:30000,
            idle:10000,
        },
    }
);

const db: any = {
    sequelize,
    Sequelize,
    Division:DivisionModel(sequelize)
};

(async (): Promise<void> => {
    try {
        await sequelize.authenticate();
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

export default db;