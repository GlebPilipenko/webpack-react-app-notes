import { AxiosResponse } from 'axios';

import { API_CONFIG } from 'api';
import { Endpoint } from 'enums';

export const getTimeZones = async (): Promise<AxiosResponse<string[]>> => {
  const timeZones = await API_CONFIG.get(Endpoint.TimeZone);

  return timeZones;
};
