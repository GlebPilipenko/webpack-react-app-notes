import { NoteDataType } from 'types';

export type PropsType = {
  notes: NoteDataType[];
  page: number;
  notesPerPage: number;
};
