import path from 'path';
import { Map_readCsv } from '../../../utils/Map_csvReader';
import { Licenses } from '../../../types/MyInfo/Qualifications';

export const licenses = Map_readCsv<Licenses>(
  path.resolve(__dirname, '../../csv/myInfo/Qualifications/Licenses.csv')
);

