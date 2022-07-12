import { RootStoreType } from 'store';

export const selectRegions = (state: RootStoreType): string[] => state.noteList.timeZones;
