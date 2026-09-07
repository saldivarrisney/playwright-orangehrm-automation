import path from 'path';
import { readCsv } from '../../utils/csvReader';
import { MyInfoDependents } from '../../../types/MyInfo/Dependents';

const myInfoDependents = readCsv<MyInfoDependents>(
  path.resolve(__dirname, '../../csv/myInfo/Dependents/Dependents.csv')
);

export const myInfoDependent = myInfoDependents;