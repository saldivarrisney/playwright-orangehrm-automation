import path from 'path';
import { Map_readCsv } from '../../../utils/Map_csvReader';
import { MyInfoEmergencyContacts } from '../../../types/MyInfo/EmergencyContacts';

export const myInfoEmergencyContacts = Map_readCsv<MyInfoEmergencyContacts>(
  path.resolve(__dirname, '../../csv/myInfo/Emergency Contacts/EmergencyContacts.csv')
);

