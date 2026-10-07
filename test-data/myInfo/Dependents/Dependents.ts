import path from 'path';
import { Map_readCsv } from '../../../utils/Map_csvReader';
import { MyInfoDependents } from '../../../types/MyInfo/Dependents';

export const myInfoDependents = Map_readCsv<MyInfoDependents>(
  path.resolve(__dirname, '../../csv/myInfo/Dependents/Dependents.csv')
);

