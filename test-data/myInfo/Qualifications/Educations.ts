import path from 'path';
import { readCsv } from '../../utils/csvReader';
import { Educations } from '../../../types/MyInfo/Qualifications';

const educations = readCsv<Educations>(
  path.resolve(__dirname, '../../csv/myInfo/Qualifications/Educations.csv')
);

export const education = educations;