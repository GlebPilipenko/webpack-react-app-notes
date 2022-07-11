import { SagaPattern } from 'enums';

type LoadTimeZonesType = {
  type: SagaPattern.LoadTimeZones;
};

export const loadTimeZones = (): LoadTimeZonesType => ({
  type: SagaPattern.LoadTimeZones,
});
