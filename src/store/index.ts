import { combineReducers } from 'redux';
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

import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import { profileReducer } from './profile/slice';
import { chatlistReducer } from './chatlist/slice';

export type StoreState = ReturnType<typeof rootReducer>;

const persistConfig = {
  blacklist: [],
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  profile: profileReducer,
  chatList: chatlistReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultModdleware) =>
    getDefaultModdleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
