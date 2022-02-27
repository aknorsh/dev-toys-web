import {
  AnyColumn,
  ColumnType,
  EnumColumn,
  NumberColumn,
  SequenceColumn,
  StringColumn,
} from 'types/csv';

const getNumber = (min: number, max: number) =>
  Math.floor(Math.random() * Math.abs(max - min + 1) + min);
const getLChar = () => 'abcdefghijklmnopqrstuvwxyz'.charAt(Math.random() * 26);
const getLChars = (len: number) => [...Array(len)].map(getLChar).join('');
const choice = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

const stringTemplate: StringColumn = {
  type: 'string',
  header: '',
  lenMin: 4,
  lenMax: 6,
  templates: ['*'],
  getValue: function () {
    return choice(this.templates)
      .trim()
      .replaceAll('*', () => getLChars(getNumber(this.lenMin, this.lenMax)));
  },
};
const numberTemplate: NumberColumn = {
  type: 'number',
  header: '',
  min: 1,
  max: 100,
  getValue: function () {
    return String(getNumber(this.min, this.max));
  },
};
const sequenceTemplate: SequenceColumn = {
  type: 'sequence',
  header: '',
  initial: 1,
  getValue: function (rowNum) {
    return String(this.initial + rowNum);
  },
};
const enumTemplate: EnumColumn = {
  type: 'enum',
  header: 'new enum',
  choices: [],
  getValue: function () {
    return this.choices.length ? choice(this.choices) : '';
  },
};

const columnTemplates: Record<ColumnType, AnyColumn> = {
  string: stringTemplate,
  number: numberTemplate,
  sequence: sequenceTemplate,
  enum: enumTemplate,
};

const allColumnTypes: ColumnType[] = Object.keys(columnTemplates) as ColumnType[];

export {
  allColumnTypes,
  columnTemplates,
  stringTemplate,
  numberTemplate,
  sequenceTemplate,
  enumTemplate,
};
