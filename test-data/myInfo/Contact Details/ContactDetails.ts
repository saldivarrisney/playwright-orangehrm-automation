import path from 'path';
import { Map_readCsv } from '../../../utils/Map_csvReader';
import { MyInfoContactDetails } from '../../../types/MyInfo/ContactDetails';

export const myInfoContactDetails = Map_readCsv<MyInfoContactDetails>(
  path.resolve(__dirname, '../../csv/myInfo/Contact Details/ContactDetails.csv')
);

