import path from 'path';
import {Map_readCsv} from '../../utils/Map_csvReader';
import { UpdateEmployeeData } from '../../types/PIM/Update_Employee';

export const updateEmployee = Map_readCsv<UpdateEmployeeData>(
  path.resolve(__dirname, '../csv/pim/Update_Employee.csv')
);

