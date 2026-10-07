import path from 'path';
import { Map_readCsv } from '../../../utils/Map_csvReader';
import { Languages } from '../../../types/MyInfo/Qualifications';

export const languages = Map_readCsv<Languages>(
  path.resolve(__dirname, '../../csv/myInfo/Qualifications/Languages.csv')
);

