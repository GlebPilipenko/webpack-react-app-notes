import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// eslint-disable-next-line import/no-unresolved
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import { rootWatcher } from 'store/sagas';
import { notesReducer } from 'store/slices/notes';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

export const rootReducer = combineReducers({ noteList: notesReducer.reducer });

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootWatcher);
