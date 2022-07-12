import { RootStoreType } from 'store';
import { RegionDateInformationType } from 'types';

export const selectDateInformation = (state: RootStoreType): RegionDateInformationType =>
  state.noteList.dateInformation;
