import { RootStoreType } from 'store';

export const selectIsDataLoading = (state: RootStoreType): boolean =>
  state.noteList.isDataLoading;
