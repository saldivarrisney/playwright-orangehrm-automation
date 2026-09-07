import path from 'path';
import { MyInfoPersonalDetails_CustomFields } from '../../../types/MyInfo/PersonalDetails';
import { readCsv } from '../../utils/csvReader';

const myInfoPersonalDetails_CustomFields = readCsv<MyInfoPersonalDetails_CustomFields>(
  path.resolve(__dirname, '../../csv/myInfo/Personal Details/CustomFields.csv')
);

export const myInfoPersonalDetails_CustomField = myInfoPersonalDetails_CustomFields;