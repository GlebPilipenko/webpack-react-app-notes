import { RootStoreType } from 'store';
import { NoteDataType } from 'types';

export const selectNotes = (state: RootStoreType): NoteDataType[] => state.noteList.notes;
