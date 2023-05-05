import { Request, Response } from 'express';
import { logger } from '../winston/logger';
import {UserService} from '../service/service';
import { MESSAGE } from '../validations/message';
import { STATUS } from '../validations/status';

export class UserController {
  static async division(req: Request, res: Response): Promise<void> {
    try {
      const { divisionName } = req.body;
      const userService=new UserService();
      const createdDivision= await userService.division(divisionName);
      res.status(200).json({
        status: 'success',
        data: createdDivision,
      });
   
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 'error',
        message: 'An error occurred while creating the division',
      });
    }
  }
}

