import path from 'path';
import {Map_readCsv} from '../../utils/Map_csvReader';
import { DeleteSpecificRecord } from '../../types/PIM/DeleteSpecificRecord';

export const deleteSpecificRecord = Map_readCsv<DeleteSpecificRecord>(
  path.resolve(__dirname, '../csv/pim/DeleteSpecificRecord.csv')
);

