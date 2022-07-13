import { Path } from 'enums';
import { NoteDataType, Nullable } from 'types';

const CHARACTERS_REMOVED_NUMBER = 1;

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
  const validPath = path.includes(Path.Main) && path.slice(CHARACTERS_REMOVED_NUMBER);
  const data = JSON.parse(currentStateBranch)[validPath];

  return data;
};
