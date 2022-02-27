import { Tab, Tabs } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { AnyColumn } from 'types/csv';

const SettingTabs = ({
  onChange,
  curIdx,
  columns,
}: {
  onChange: (event: React.SyntheticEvent, updatedTabIndex: number) => void;
  curIdx: number;
  columns: AnyColumn[];
}) => (
  <Tabs
    value={curIdx}
    variant='scrollable'
    scrollButtons={false}
    onChange={onChange}
    aria-label='column-tabs'
  >
    {columns.map((column, idx) => (
      <Tab
        key={`setting-tabs-item-${idx}`}
        label={column.header}
        id={`setting-tabs-item-${idx}`}
        aria-controls={`setting-tabs-item-${idx}`}
      />
    ))}
    <Tab
      key='setting-tabs-item-add'
      icon={<AddIcon />}
      id={'setting-tabs-item-add'}
      aria-controls='setting-tabs-item-add'
    />
  </Tabs>
);

export default SettingTabs;
