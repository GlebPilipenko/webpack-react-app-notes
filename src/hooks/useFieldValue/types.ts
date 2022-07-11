import { BaseOnChangeType } from 'types';

export type UseFieldValueReturnType = [
  string,
  BaseOnChangeType,
  (newValue: string) => void,
];
