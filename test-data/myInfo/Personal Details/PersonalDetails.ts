import path from 'path';
import { Map_readCsv } from '../../../utils/Map_csvReader';
import { MyInfoPersonalDetails } from '../../../types/MyInfo/PersonalDetails';

export const myInfoPersonalDetails = Map_readCsv<MyInfoPersonalDetails>(
  path.resolve(__dirname, '../../csv/myInfo/Personal Details/PersonalDetails.csv')
);

