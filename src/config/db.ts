import {config} from 'dotenv';
config();

export default{
  host: process.env.HOST!,
  user: process.env.USER!,
  password: process.env.PASSWORD!,
  db: process.env.DATABASE!,
  dialect: "mysql",
  pool: {
    max: parseInt(process.env.MAX!),
    min: parseInt(process.env.MIN!),
    acquire: parseInt(process.env.ACQUIRE!),
    idle: parseInt(process.env.IDLE!),
  }
};
