import path from 'path';
import { Map_readCsv } from '../../../utils/Map_csvReader';
import { Skills } from '../../../types/MyInfo/Qualifications';

export const skills = Map_readCsv<Skills>(
  path.resolve(__dirname, '../../csv/myInfo/Qualifications/Skills.csv')
);

