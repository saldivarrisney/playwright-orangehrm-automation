import path from 'path';
import {Map_readCsv} from '../../utils/Map_csvReader';
import {CreateEmployee} from '../../types/PIM/AddEmployees';

export const createEmployee = Map_readCsv<CreateEmployee>(
  path.resolve(__dirname, '../csv/pim/CreateEmployee.csv')
);
