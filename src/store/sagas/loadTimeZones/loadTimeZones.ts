import { call, put } from 'redux-saga/effects';

import { StatusCode } from 'enums';
import { getTimeZones } from 'services/api';
import { changeIsDataLoading, setTimeZones } from 'store/slices/notes';
import { GeneratorType } from 'types';

export default function* loadTimeZonesWorker(): GeneratorType<string[]> {
  try {
    yield put(changeIsDataLoading(true));

    const response = yield call(getTimeZones);

    if (response.status === StatusCode.Successes) {
      const { data: timeZones } = response;

      if (Array.isArray(timeZones) && timeZones.length > 0) {
        yield put(setTimeZones(timeZones));
      }
    }

    yield put(changeIsDataLoading(false));
  } catch (err) {
    console.log(err);
  }
}
