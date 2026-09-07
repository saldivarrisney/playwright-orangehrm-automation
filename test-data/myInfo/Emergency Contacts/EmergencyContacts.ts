import path from 'path';
import { readCsv } from '../../utils/csvReader';
import { MyInfoEmergencyContacts } from '../../../types/MyInfo/EmergencyContacts';

const myInfoEmergencyContacts = readCsv<MyInfoEmergencyContacts>(
  path.resolve(__dirname, '../../csv/myInfo/Emergency Contacts/EmergencyContacts.csv')
);

export const myInfoEmergencyContact = myInfoEmergencyContacts;