import { CardContent, TextField } from '@mui/material';
import { AnyColumn, EnumColumn, NumberColumn, SequenceColumn, StringColumn } from 'types/csv';

const contentStyle = {
  display: 'flex',
  gap: 1,
};

// TODO: onUpdateからonInputに変える
// TODO: enumとstring.templatesにプリセットを与える

function StringColumnTabPanel({
  column,
  onUpdateColumn,
}: {
  column: StringColumn;
  onUpdateColumn: (column: StringColumn) => void;
}) {
  return (
    <>
      <CardContent sx={contentStyle}>
        <TextField
          value={column.lenMin}
          id='len-min-field'
          label='Min Length'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const updatedMin = Number(e.target.value);
            if (!isNaN(updatedMin) && updatedMin >= 0) {
              onUpdateColumn({ ...column, lenMin: updatedMin });
            }
          }}
        />
        <TextField
          value={column.lenMax}
          id='len-max-field'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const updatedMax = Number(e.target.value);
            if (!isNaN(updatedMax)) {
              onUpdateColumn({ ...column, lenMax: updatedMax });
            }
          }}
          label='Max Len'
        />
      </CardContent>
      <CardContent sx={contentStyle}>
        <TextField
          value={column.templates.join(',')}
          id='templates-field'
          label='Templates'
          helperText='Replace "*" with random string. ex) "*,*.com" generates "abcde", "xyz.com", ...'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const updatedTemplates = e.target.value.split(',');
            onUpdateColumn({ ...column, templates: updatedTemplates });
          }}
          variant='standard'
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
      </CardContent>
    </>
  );
}

function NumberColumnTabPanel({
  column,
  onUpdateColumn,
}: {
  column: NumberColumn;
  onUpdateColumn: (column: NumberColumn) => void;
}) {
  return (
    <>
      <CardContent sx={contentStyle}>
        <TextField
          value={column.min}
          id='min-field'
          label='Min'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const updatedMin = Number(e.target.value);
            if (!isNaN(updatedMin)) {
              onUpdateColumn({ ...column, min: updatedMin });
            }
          }}
        />
        <TextField
          value={column.max}
          id='max-field'
          label='Max'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const updatedMax = Number(e.target.value);
            if (!isNaN(updatedMax)) {
              onUpdateColumn({ ...column, max: updatedMax });
            }
          }}
          type='number'
        />
      </CardContent>
    </>
  );
}

function SequenceColumnTabPanel({
  column,
  onUpdateColumn,
}: {
  column: SequenceColumn;
  onUpdateColumn: (column: SequenceColumn) => void;
}) {
  return (
    <>
      <CardContent sx={contentStyle}>
        <TextField
          value={column.initial}
          id='initial-field'
          label='Init'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onUpdateColumn({ ...column, initial: Number(e.target.value) });
          }}
          type='number'
        />
      </CardContent>
    </>
  );
}

function EnumColumnTabPanel({
  column,
  onUpdateColumn,
}: {
  column: EnumColumn;
  onUpdateColumn: (column: EnumColumn) => void;
}) {
  return (
    <>
      <CardContent sx={contentStyle}>
        <TextField
          value={column.choices.join(',')}
          id='choice-field'
          label='Choices'
          helperText='Separate with "," to get choices.'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const updatedChoices = e.target.value.split(',');
            onUpdateColumn({ ...column, choices: updatedChoices });
          }}
          variant='standard'
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
      </CardContent>
    </>
  );
}

const Contents = ({
  column,
  onUpdateColumn,
}: {
  column: AnyColumn;
  onUpdateColumn: (column: AnyColumn) => void;
}) => {
  switch (column.type) {
    case 'string':
      return (
        <StringColumnTabPanel column={column as StringColumn} onUpdateColumn={onUpdateColumn} />
      );
    case 'number':
      return (
        <NumberColumnTabPanel column={column as NumberColumn} onUpdateColumn={onUpdateColumn} />
      );
    case 'sequence':
      return (
        <SequenceColumnTabPanel column={column as SequenceColumn} onUpdateColumn={onUpdateColumn} />
      );
    case 'enum':
      return <EnumColumnTabPanel column={column as EnumColumn} onUpdateColumn={onUpdateColumn} />;
    default:
      return <div>invalid type</div>;
  }
};

export default Contents;
