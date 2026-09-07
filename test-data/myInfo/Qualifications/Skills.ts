import path from 'path';
import { readCsv } from '../../utils/csvReader';
import { Skills } from '../../../types/MyInfo/Qualifications';

const skills = readCsv<Skills>(
  path.resolve(__dirname, '../../csv/myInfo/Qualifications/Skills.csv')
);

export const skill = skills;