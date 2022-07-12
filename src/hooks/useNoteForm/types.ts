import { ChangeEvent, SyntheticEvent } from 'react';

export type UseNoteFormReturnType = [
  string,
  string,
  string,
  string[],
  boolean,
  boolean,
  (event: SyntheticEvent) => void,
  (event: ChangeEvent<HTMLInputElement>) => void,
  (event: ChangeEvent<HTMLInputElement>) => void,
  (event: ChangeEvent<HTMLInputElement>) => void,
];
