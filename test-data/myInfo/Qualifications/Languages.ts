import path from 'path';
import { readCsv } from '../../utils/csvReader';
import { Languages } from '../../../types/MyInfo/Qualifications';

const languages = readCsv<Languages>(
  path.resolve(__dirname, '../../csv/myInfo/Qualifications/Languages.csv')
);

export const language = languages;