import { RootStoreType } from 'store';
import { Nullable, RegionDateInformationType } from 'types';

export const selectDateInformation = (
  state: RootStoreType,
): Nullable<RegionDateInformationType> => state.noteList.dateInformation;
