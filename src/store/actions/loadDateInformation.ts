import { SagaPattern } from 'enums';

export type LoadDateInformationType = {
  type: SagaPattern.LoadDateInformation;
  payload: string;
};

export const loadDateInformation = (region: string): LoadDateInformationType => ({
  type: SagaPattern.LoadDateInformation,
  payload: region,
});
