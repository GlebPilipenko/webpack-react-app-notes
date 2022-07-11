import { NoteDataType, Nullable } from 'types';

export const parseLocalStorageOrReturnNull = (
  localStorageKey: string,
  reducerName: string,
  path: string,
): Nullable<NoteDataType[]> => {
  const store = JSON.parse(localStorage.getItem(localStorageKey));

  if (!store) {
    return null;
  }

  const currentStateBranch = store[reducerName];
  const data = JSON.parse(currentStateBranch)[path];

  return data;
};
