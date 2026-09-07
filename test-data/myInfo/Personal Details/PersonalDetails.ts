import path from 'path';
import { readCsv } from '../../utils/csvReader';
import { MyInfoPersonalDetails } from '../../../types/MyInfo/PersonalDetails';

const myInfoPersonalDetails = readCsv<MyInfoPersonalDetails>(
  path.resolve(__dirname, '../../csv/myInfo/Personal Details/PersonalDetails.csv')
);

export const myInfoPersonalDetail = myInfoPersonalDetails;