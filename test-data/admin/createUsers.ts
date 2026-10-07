import path from 'path';
import { Map_readCsv } from '../../utils/Map_csvReader';
import {AddUserData} from '../../types/Admin/Users';

const createUsers = Map_readCsv<AddUserData>(
  path.resolve(__dirname, '../csv/admin/CreateUsers.csv')
);

export const createUser = createUsers;
