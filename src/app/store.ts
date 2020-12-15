import { configureStore, combineReducers } from '@reduxjs/toolkit';
import weatherSliceReducer from '@/features/weather/slice';

const rootReducer = combineReducers({
  weatherStore: weatherSliceReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
