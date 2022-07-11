import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice';

import { NoteDataType } from 'types';

export type NoteSliceType = {
  notes: NoteDataType[];
  timeZones: string[];
};

const initialState: NoteSliceType = {
  notes: [],
  timeZones: [],
};

export const notesReducer = createSlice<
  NoteSliceType,
  SliceCaseReducers<NoteSliceType>,
  string
>({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state: NoteSliceType, action: PayloadAction<NoteDataType>): void => {
      state.notes.push(action.payload);
    },
    setTimeZones: (state: NoteSliceType, action: PayloadAction<string[]>): void => {
      state.timeZones = [...action.payload];
    },
  },
});

export const { addNote, setTimeZones } = notesReducer.actions;
