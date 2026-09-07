import path from 'path';
import { readCsv } from '../utils/csvReader';
import {AddUserData} from '../../types/Admin/Users';

const createUsers = readCsv<AddUserData>(
  path.resolve(__dirname, '../csv/admin/CreateUsers.csv')
);

export const createUser = createUsers;