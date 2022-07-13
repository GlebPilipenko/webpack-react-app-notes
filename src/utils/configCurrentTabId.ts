import { Path, TabId } from 'enums';

const PathMapper = {
  [Path.Form]: TabId.Form,
  [Path.Notes]: TabId.Notes,
};

export const configCurrentTabId = (pathName: string): number => PathMapper[pathName];
