import fs from 'fs';
import { parse } from 'csv-parse/sync';

export function readCsv<T>(filePath: string): T[] {

    const fileContent = fs.readFileSync(filePath, 'utf-8');

    return parse(fileContent, {
        columns: true,
        skip_empty_lines: true,
        trim: true,
    }) as T[];
}