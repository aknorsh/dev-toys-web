import { Card, CardContent, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const Field = ({
  label,
  value,
  setValue,
  convertFn,
  inverseFn,
}: {
  label: string;
  value: number;
  setValue: (v: number) => void;
  convertFn: (v: number) => string;
  inverseFn: (v: string) => number;
}) => (
  <CardContent sx={{ display: 'flex', gap: 1 }}>
    <TextField
      id={`num-base-field-${label}`}
      value={convertFn(value)}
      label={label}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        const v = e.target.value === '' ? 0 : inverseFn(e.target.value);
        if (isNaN(v)) return;
        setValue(v);
      }}
      sx={{ minWidth: 200 }}
    />
    <Typography variant='caption' sx={{ marginLeft: 'auto', lineHeight: '56px' }}>
      {convertFn(value)
        .split('')
        .reverse()
        .reduce((str, n, id) => (id > 0 && id % 3 === 0 ? `${n},${str}` : `${n}${str}`))}
    </Typography>
  </CardContent>
);

const NumBase = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <Card variant='outlined' sx={{ marginTop: 2, marginRight: 2 }}>
        <Field
          label='Base 16'
          value={value}
          setValue={setValue}
          convertFn={(v) => v.toString(16)}
          inverseFn={(v) => parseInt(v, 16)}
        />
        <Field
          label='Base 10'
          value={value}
          setValue={setValue}
          convertFn={(v) => v.toString(10)}
          inverseFn={(v) => parseInt(v, 10)}
        />
        <Field
          label='Base 8'
          value={value}
          setValue={setValue}
          convertFn={(v) => v.toString(8)}
          inverseFn={(v) => parseInt(v, 8)}
        />
        <Field
          label='Base 2'
          value={value}
          setValue={setValue}
          convertFn={(v) => v.toString(2)}
          inverseFn={(v) => parseInt(v, 2)}
        />
      </Card>
    </>
  );
};

export default NumBase;
