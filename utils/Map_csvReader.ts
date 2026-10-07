import fs from 'fs';
import { parse } from 'csv-parse/sync';

export function Map_readCsv<T>(filePath: string): Record<string, T> {

  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const rows = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  }) as Record<string, string>[];

  const result: Record<string, T> = {};

  for (const row of rows) {
    const { key, ...data } = row;
    result[key] = data as T;
  }

  return result;
}