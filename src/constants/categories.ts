import { Category } from '../types/tool';

// TODO: アイコンつける
const categories: Category[] = [
  {
    name: 'Generator', // build icon
    path: 'generate',
    tools: [
      { name: 'CSV', path: 'csv' }, // border all icon
    ],
  },
  {
    name: 'EnDecoder', // enhanced encryption icon
    path: 'encode-decode',
    tools: [
      { name: 'Base64', path: 'base64' }, // なんかぐちゃぐちゃしたもの
      { name: 'JWT', path: 'jwt' }, // key icon
    ],
  },
  {
    name: 'Convertor', // swap horiz icon
    path: 'convert',
    tools: [
      { name: 'Num Base', path: 'num-base' }, // numbers
    ],
  },
  {
    name: 'Formatter',
    path: 'format',
    tools: [
      { name: 'JSON', path: 'json' }, // data object icon
    ],
  },
];

export { categories };
