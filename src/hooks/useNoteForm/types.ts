import { SyntheticEvent } from 'react';

import { BaseOnChangeType } from 'types';

export type UseNoteFormReturnType = [
  string,
  string,
  string,
  string[],
  boolean,
  boolean,
  boolean,
  (event: SyntheticEvent) => void,
  BaseOnChangeType,
  BaseOnChangeType,
  BaseOnChangeType,
  (newValue: boolean) => void,
];
