import path from 'path';
import {readCsv} from '../../utils/csvReader';
import {CreateEmployee} from '../../types/PIM/AddEmployees';

export const massCreateOfEmployee = readCsv<CreateEmployee>(
  path.resolve(__dirname, '../csv/pim/CreateEmployee_MassCreation.csv')
);
