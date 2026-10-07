import path from 'path';
import { Map_readCsv } from '../../../utils/Map_csvReader';
import { AttachmentFields } from '../../../types/Components/attachments';


const attachments = Map_readCsv<AttachmentFields>(
  path.resolve(__dirname, '../../csv/components/attachments/Attachments.csv')
);

export const attachment = attachments;