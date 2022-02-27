import { AnyColumn } from 'types/csv';

function generateBody(columns: AnyColumn[], size: number): string[][] {
  return [...Array(size)].map((_, idx) => columns.map((column) => column.getValue(idx)));
}
function generateHeader(columns: AnyColumn[]): string[] {
  return columns.map((column) => column.header);
}
export { generateBody, generateHeader };
