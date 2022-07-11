import { takeLatest } from 'redux-saga/effects';

import { SagaPattern } from 'enums';
import { loadTimeZonesWorker } from 'store/sagas';

export default function* rootWatcher(): Generator {
  yield takeLatest(SagaPattern.LoadTimeZones, loadTimeZonesWorker);
}
