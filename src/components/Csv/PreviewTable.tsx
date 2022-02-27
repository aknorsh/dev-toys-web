import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const PreviewTable = ({ header, body }: { header: string[]; body: string[][] }) => (
  <Table sx={{ border: 1, borderColor: 'lightgray' }}>
    <TableHead>
      <TableRow>
        {header.map((h, idx) => (
          <TableCell key={`preview-head-${idx}`}> {h}</TableCell>
        ))}
      </TableRow>
    </TableHead>
    <TableBody>
      {body.map((row, rowIdx) => (
        <TableRow key={`preview-body-row-${rowIdx}`}>
          {row.map((cell, cellIdx) => (
            <TableCell key={`preview-body-cell-${rowIdx}-${cellIdx}`}>{cell}</TableCell>
          ))}
        </TableRow>
      ))}
      <TableRow>
        <TableCell>...</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export default PreviewTable;
