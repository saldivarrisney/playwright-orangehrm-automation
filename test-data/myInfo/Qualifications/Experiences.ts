import path from 'path';
import { Map_readCsv } from '../../../utils/Map_csvReader';
import { Experiences } from '../../../types/MyInfo/Qualifications';

export const experiences = Map_readCsv<Experiences>(
  path.resolve(__dirname, '../../csv/myInfo/Qualifications/Experiences.csv')
);

