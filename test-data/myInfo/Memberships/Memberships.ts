import path from 'path';
import { readCsv } from '../../utils/csvReader';
import { MyInfoMemberships } from '../../../types/MyInfo/Memberships';


const myInfoMemberships = readCsv<MyInfoMemberships>(
  path.resolve(__dirname, '../../csv/myInfo/Memberships/Memberships.csv')
);

export const myInfoMembership = myInfoMemberships;