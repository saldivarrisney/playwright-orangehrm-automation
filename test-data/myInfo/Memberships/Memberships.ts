import path from 'path';
import { Map_readCsv } from '../../../utils/Map_csvReader';
import { MyInfoMemberships } from '../../../types/MyInfo/Memberships';


export const myInfoMemberships = Map_readCsv<MyInfoMemberships>(
  path.resolve(__dirname, '../../csv/myInfo/Memberships/Memberships.csv')
);

