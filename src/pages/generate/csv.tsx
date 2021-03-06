import { Button, Card, Container, Divider, IconButton, TextField, Typography } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import { AnyColumn } from 'types/csv';
import React, { useEffect, useState } from 'react';
import {
  columnTemplates,
  enumTemplate,
  numberTemplate,
  sequenceTemplate,
  stringTemplate,
} from 'constants/csv';
import SettingTabs from 'components/Csv/SettingTabs';
import SettingTabPanelHeader from 'components/Csv/SettingTabPanelHeader';
import SettingTabPanelContents from 'components/Csv/SettingTabPanelContents';
import { generateBody, generateHeader } from 'lib/csv';
import PreviewTable from 'components/Csv/PreviewTable';

const initialColumns: AnyColumn[] = [
  { ...sequenceTemplate, header: 'id' },
  {
    ...stringTemplate,
    header: 'email',
    lenMin: 3,
    lenMax: 5,
    templates: ['*.*@example.com', '*.*@example.net', '*@example.org', '*.*@example.edu'],
  },
  { ...enumTemplate, header: 'country', choices: ['Japan', 'Korea', 'China', 'Singapore'] },
  { ...numberTemplate, header: 'score' },
];

// TODO: Settingのエクスポートをする
// TODO: dateのサポート

export default function Csv() {
  const [size, setSize] = useState(100);
  const handleSetSize = (e: React.ChangeEvent<HTMLInputElement>) => setSize(Number(e.target.value));

  const [columns, setColumns] = useState(initialColumns);
  const updateColumn = (updatedColumn: AnyColumn) => {
    const updated = [...columns];
    updated.splice(curTabIdx, 1, updatedColumn);
    setColumns(updated);
  };
  const deleteColumn = () => {
    if (columns.length === 1) {
      return;
    }
    const updated = [...columns];
    updated.splice(curTabIdx, 1);
    setColumns(updated);
    if (updated.length <= curTabIdx) {
      setCurTabIdx(updated.length - 1);
    }
  };

  const [curTabIdx, setCurTabIdx] = useState(0);
  const handleClickTab = (_: React.SyntheticEvent, tabIdx: number) => {
    if (columns.length === tabIdx) {
      const newColumns = [...columns];
      newColumns.push({ ...columnTemplates.string, header: 'new column' });
      setColumns(newColumns);
    }
    setCurTabIdx(tabIdx);
  };

  const [previewHead, setPreviewHead] = useState([] as string[]);
  const [previewBody, setPreviewBody] = useState([] as string[][]);
  const getPreview = (columns: AnyColumn[]) => {
    setPreviewHead(generateHeader(columns));
    setPreviewBody(generateBody(columns, 5));
  };
  useEffect(() => getPreview(columns), [columns]);

  const handleDownload = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const enclose = (val: string) => `"${val}"`;
    const row2Str = (row: string[]) => row.map((cell) => enclose(cell)).join(',');

    const content = [generateHeader(columns), ...generateBody(columns, size)]
      .map((row) => row2Str(row))
      .join('\n');

    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sample.csv';
    a.click();
    a.remove();
  };

  return (
    <>
      <Container maxWidth='lg' sx={{ marginTop: 2 }}>
        <SettingTabs curIdx={curTabIdx} onChange={handleClickTab} columns={columns} />

        <Card variant='outlined' sx={{ height: 350 }}>
          <SettingTabPanelHeader
            column={columns[curTabIdx]}
            onUpdateColumn={updateColumn}
            onDeleteColumn={deleteColumn}
          />
          <Divider variant='fullWidth' />
          <SettingTabPanelContents column={columns[curTabIdx]} onUpdateColumn={updateColumn} />
        </Card>
      </Container>

      <Container maxWidth='lg' sx={{ marginTop: 2, display: 'flex', gap: 2 }}>
        <Button variant='contained' onClick={handleDownload}>
          Download
        </Button>
        <TextField
          id='size-field'
          value={size}
          onChange={handleSetSize}
          variant='standard'
          label='Size'
          type='number'
        />
      </Container>

      <Divider sx={{ marginTop: 2 }} />

      <Container maxWidth='lg' sx={{ marginTop: 2 }}>
        <IconButton onClick={() => getPreview(columns)}>
          <ReplayIcon />
        </IconButton>
        <Typography variant='button' color='initial'>
          Preview
        </Typography>
        <PreviewTable header={previewHead} body={previewBody} />
      </Container>
    </>
  );
}
