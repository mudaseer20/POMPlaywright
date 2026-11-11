import fs from 'fs';
import path from 'path';

export function readCSVData(filepath: string) {
  const absolutePath = path.resolve(import.meta.dirname, filepath);
  const fileContent = fs.readFileSync(absolutePath, 'utf-8');

  // 1. Split the file content into rows and filter out empty/blank lines
  const rows = fileContent
    .split(/\r?\n/)
    .map(row => row.trim())
    .filter(row => row.length > 0);

  if (rows.length === 0) return [];

  // 2. Extract headers from the very first row
  const headers = rows[0].split(',').map(header => header.trim());

  // 3. Map the rest of the lines into clean data objects
  return rows.slice(1).map(row => {
    const values = row.split(',').map(val => val.trim());
    const record: Record<string, string> = {};

    headers.forEach((header, index) => {
      // If a row is missing a column value, default it to an empty string instead of crashing
      record[header] = values[index] !== undefined ? values[index] : '';
    });

    return record;
  });
}