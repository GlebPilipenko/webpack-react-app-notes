import { call, put } from 'redux-saga/effects';

import { getTimeZone } from 'services/api';
import { setTimeZones } from 'store/slices/notes';

export default function* loadTimeZonesWorker(): Generator {
  try {
    const timeZones = yield call(getTimeZone);

    if (Array.isArray(timeZones) && timeZones.length > 0) {
      yield put(setTimeZones(timeZones));
    }
  } catch (err) {
    console.log(err);
  }
}
