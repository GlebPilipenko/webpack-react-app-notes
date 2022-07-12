import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice';

import { NoteDataType, Nullable, RegionDateInformationType } from 'types';

export type NoteSliceType = {
  notes: NoteDataType[];
  timeZones: string[];
  isDataLoading: boolean;
  dateInformation: Nullable<RegionDateInformationType>;
};

const initialState: NoteSliceType = {
  notes: [],
  timeZones: [],
  isDataLoading: false,
  dateInformation: null as Nullable<RegionDateInformationType>,
};

export const notesReducer = createSlice<
  NoteSliceType,
  SliceCaseReducers<NoteSliceType>,
  string
>({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<NoteDataType>): void => {
      state.notes.push(action.payload);
    },
    setTimeZones: (state, action: PayloadAction<string[]>): void => {
      state.timeZones = [...action.payload];
    },
    changeIsDataLoading: (state, action: PayloadAction<boolean>): void => {
      state.isDataLoading = action.payload;
    },
    setDateInformation: (
      state,
      action: PayloadAction<RegionDateInformationType>,
    ): void => {
      state.dateInformation = action.payload;
    },
  },
});

export const { addNote, setTimeZones, setDateInformation, changeIsDataLoading } =
  notesReducer.actions;
