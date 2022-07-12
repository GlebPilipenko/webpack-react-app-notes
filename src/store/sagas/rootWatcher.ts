import { takeLatest } from 'redux-saga/effects';

import { SagaPattern } from 'enums';
import { loadDateInformationWorker, loadTimeZonesWorker } from 'store/sagas';

export default function* rootWatcher(): Generator {
  yield takeLatest(SagaPattern.LoadTimeZones, loadTimeZonesWorker);
  yield takeLatest(SagaPattern.LoadDateInformation, loadDateInformationWorker);
}
