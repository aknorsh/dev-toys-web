type ColumnType = 'sequence' | 'number' | 'string' | 'enum';

type Column = {
  type: ColumnType;
  header: string;
  getValue: (rowNum: number) => string;
};
type SequenceColumn = Column & {
  initial: number;
};
type NumberColumn = Column & {
  min: number;
  max: number;
};
type StringColumn = Column & {
  lenMin: number;
  lenMax: number;
  templates: string[];
};
type EnumColumn = Column & {
  type: 'enum';
  choices: string[];
};

type AnyColumn = SequenceColumn | NumberColumn | StringColumn | EnumColumn;

export type { ColumnType, SequenceColumn, NumberColumn, StringColumn, EnumColumn, AnyColumn };
