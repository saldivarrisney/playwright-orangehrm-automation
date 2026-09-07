import path from 'path';
import { readCsv } from '../../utils/csvReader';
import { Experiences } from '../../../types/MyInfo/Qualifications';

const experiences = readCsv<Experiences>(
  path.resolve(__dirname, '../../csv/myInfo/Qualifications/Experiences.csv')
);

export const experience = experiences;