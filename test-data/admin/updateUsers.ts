import path from 'path';
import { readCsv } from '../utils/csvReader';
import {UpdateUserData} from '../../types/Admin/Users';

const updateUsers = readCsv<UpdateUserData>(
  path.resolve(__dirname, '../csv/admin/UpdateUsers.csv')
);

export const updateUser = updateUsers;