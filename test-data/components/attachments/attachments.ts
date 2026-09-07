import path from 'path';
import { readCsv } from '../../utils/csvReader';
import { AttachmentFields } from '../../../types/Components/attachments';


const attachments = readCsv<AttachmentFields>(
  path.resolve(__dirname, '../../csv/components/attachments/Attachments.csv')
);

export const attachment = attachments;