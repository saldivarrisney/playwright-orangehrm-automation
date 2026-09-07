import path from 'path';
import { readCsv } from '../../utils/csvReader';
import { Licenses } from '../../../types/MyInfo/Qualifications';

const licenses = readCsv<Licenses>(
  path.resolve(__dirname, '../../csv/myInfo/Qualifications/Licenses.csv')
);

export const license = licenses;