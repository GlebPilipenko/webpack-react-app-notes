import { AxiosResponse } from 'axios';

import { API_CONFIG } from 'api';
import { Endpoint } from 'enums';
import { RegionDateInformationType } from 'types';

export const getDateInformation = async (
  region: string,
): Promise<AxiosResponse<RegionDateInformationType>> => {
  const dateInformation = await API_CONFIG.get(`${Endpoint.TimeZone}/${region}`);

  return dateInformation;
};
