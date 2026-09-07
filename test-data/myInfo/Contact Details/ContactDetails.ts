import path from 'path';
import { readCsv } from '../../utils/csvReader';
import { MyInfoContactDetails } from '../../../types/MyInfo/ContactDetails';

const myInfoContactDetails = readCsv<MyInfoContactDetails>(
  path.resolve(__dirname, '../../csv/myInfo/Contact Details/ContactDetails.csv')


);

export const myInfoContactDetail = myInfoContactDetails;