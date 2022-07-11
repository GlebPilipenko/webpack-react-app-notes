import { API_CONFIG } from 'api';
import { Endpoint } from 'enums';

export const getTimeZone = async (): Promise<string[]> => {
  const timeZones = await API_CONFIG.get(Endpoint.TimeZone).then(res => res.data);

  return timeZones;
};
