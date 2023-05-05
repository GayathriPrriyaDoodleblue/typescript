import express, { Application, NextFunction } from 'express';
import db from './models/index';
import { logger } from './winston/logger';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

const app: Application = express();

db.sequelize.sync({ force: false }).then(() => {
    console.log('Drop and Resync Db');
});

dotenv.config();
const port: number | string = process.env.PORT || 6000;

app.use(bodyParser.json());

app.use((req: any, res: any, next: NextFunction) => {
    logger.defaultMeta.path = `${req.method} ${req.path}`;
    next();
});

import routes from './routes/index';
routes(app);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});