import path from 'path';
import { Map_readCsv } from '../../../utils/Map_csvReader';
import { Educations } from '../../../types/MyInfo/Qualifications';

export const educations = Map_readCsv<Educations>(
  path.resolve(__dirname, '../../csv/myInfo/Qualifications/Educations.csv')
);

