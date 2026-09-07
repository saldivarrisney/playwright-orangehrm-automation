
import path from 'path';
import { readCsv } from '../../utils/csvReader';
import { MyInfoImmigrations } from '../../../types/MyInfo/Immigrations';

const myInfoImmigrations = readCsv<MyInfoImmigrations>(
  path.resolve(__dirname, '../../csv/myInfo/Immigrations/Immigrations.csv')


);

export const myInfoImmigration = myInfoImmigrations;