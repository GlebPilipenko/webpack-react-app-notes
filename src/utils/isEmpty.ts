import { Nullable } from 'types';

const ARRAY_LENGTH_EQUAL_EMPTY = 0;

export const isEmpty = (data: Nullable<Object>): boolean => {
  if (!data) {
    return false;
  }

  return Object.keys(data).length > ARRAY_LENGTH_EQUAL_EMPTY;
};
