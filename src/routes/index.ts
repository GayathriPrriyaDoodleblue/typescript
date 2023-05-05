import { Application } from 'express';
import commonRoutes from './commonRoutes';

const assignRoutes = (app: Application): void => {
  app.use('/app', commonRoutes);
};

export default assignRoutes;