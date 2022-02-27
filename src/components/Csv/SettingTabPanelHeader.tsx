import {
  CardContent,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { AnyColumn, ColumnType } from 'types/csv';
import { allColumnTypes, columnTemplates } from 'constants/csv';
import React from 'react';

const Header = ({
  column,
  onUpdateColumn,
  onDeleteColumn,
}: {
  column: AnyColumn;
  onUpdateColumn: (column: AnyColumn) => void;
  onDeleteColumn: () => void;
}) => (
  <CardContent sx={{ display: 'flex', gap: 1 }}>
    <FormControl sx={{ flexGrow: 1 }}>
      <TextField
        id='header-text-field'
        label='Header'
        value={column.header}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onUpdateColumn({ ...column, header: e.target.value })
        }
      />
    </FormControl>
    <FormControl sx={{ minWidth: 100 }}>
      <InputLabel id='type-select-label' variant='standard'>
        Type
      </InputLabel>
      <Select
        label='Type'
        value={column.type}
        variant='standard'
        onChange={(e: SelectChangeEvent) => {
          const updatedType = e.target.value as ColumnType;
          if (updatedType !== column.type) {
            onUpdateColumn({ ...columnTemplates[updatedType], header: column.header });
          }
        }}
      >
        {allColumnTypes.map((type, idx) => (
          <MenuItem key={`type-option-${idx}`} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    <IconButton color='warning' sx={{ marginLeft: 'auto' }} onClick={onDeleteColumn}>
      <DeleteIcon />
    </IconButton>
  </CardContent>
);

export default Header;
