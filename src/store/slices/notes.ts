import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice';

export type NoteSliceType = {
  notes: string[];
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
    setTimeZones: (state: NoteSliceType, action: PayloadAction<string[]>): void => {
      state.timeZones = [...action.payload];
    },
  },
});

export const { setTimeZones } = notesReducer.actions;
