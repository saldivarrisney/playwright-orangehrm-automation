import path from 'path';
import { MyInfoPersonalDetails_CustomFields } from '../../../types/MyInfo/PersonalDetails';
import { Map_readCsv } from '../../../utils/Map_csvReader';

export const myInfoPersonalDetails_CustomFields = Map_readCsv<MyInfoPersonalDetails_CustomFields>(
  path.resolve(__dirname, '../../csv/myInfo/Personal Details/CustomFields.csv')
);

