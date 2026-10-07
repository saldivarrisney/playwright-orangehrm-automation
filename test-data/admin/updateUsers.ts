import path from 'path';
import { Map_readCsv } from '../../utils/Map_csvReader';
import {UpdateUserData} from '../../types/Admin/Users';

const updateUsers = Map_readCsv<UpdateUserData>(
  path.resolve(__dirname, '../csv/admin/UpdateUsers.csv')
);

export const updateUser = updateUsers;