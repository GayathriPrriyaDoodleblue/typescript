import Division from '../models';
import { MESSAGE } from '../validations/message';
import { Op } from 'sequelize';

export class UserService {
  async division(divisionName: string):Promise<typeof Division | null> {
    try {
        console.log('divisionName :>> ', divisionName);
      const createdDivision = await Division.create({
        divisionName:divisionName
      });
      console.log('createdDivision :>> ', createdDivision);
      return { createdDivision };
    } catch (error) {
        console.log('error :>> ', error);
     throw new Error ('Unable to create division')
    }
  }
}

