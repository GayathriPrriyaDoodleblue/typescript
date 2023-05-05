import { Router } from 'express';
import { UserController } from '../controller/controller';

const router = Router();

router.post('/division', UserController.division);

export default router;