import { call, put } from 'redux-saga/effects';

import { StatusCode } from 'enums';
import { getDateInformation } from 'services/api';
import { LoadDateInformationType } from 'store/actions';
import { changeIsDataLoading, setDateInformation } from 'store/slices/notes';
import { GeneratorType, RegionDateInformationType } from 'types';

export default function* loadTimeZonesWorker(
  action: LoadDateInformationType,
): GeneratorType<RegionDateInformationType> {
  try {
    yield put(changeIsDataLoading(true));

    const response = yield call(getDateInformation, action.payload);

    if (response.status === StatusCode.Successes) {
      const { data: dateInformation } = response;

      if (dateInformation.timezone) {
        yield put(setDateInformation(dateInformation));
      }
    }

    yield put(changeIsDataLoading(false));
  } catch (err) {
    console.log(err);
  }
}
