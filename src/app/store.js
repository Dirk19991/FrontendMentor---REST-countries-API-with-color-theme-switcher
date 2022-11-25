import { configureStore, combineReducers } from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage';

import countriesReducer from '../features/homepage/countriesSlice';
import detailsReducer from '../features/details/detailsSlice';
import themeReducer from '../features/homepage/header/themeSlice';
import searchReducer from '../features/homepage/searchFilterPanel/searchSlice';
import neighborsReducer from '../features/details/neighborsSlice';

const rootReducer = combineReducers({
  countries: countriesReducer,
  details: detailsReducer,
  theme: themeReducer,
  search: searchReducer,
  neighbors: neighborsReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
