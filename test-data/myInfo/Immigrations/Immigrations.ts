
import path from 'path';
import { Map_readCsv } from '../../../utils/Map_csvReader';
import { MyInfoImmigrations } from '../../../types/MyInfo/Immigrations';

export const myInfoImmigrations = Map_readCsv<MyInfoImmigrations>(
  path.resolve(__dirname, '../../csv/myInfo/Immigrations/Immigrations.csv')
);

