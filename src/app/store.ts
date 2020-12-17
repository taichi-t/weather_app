import { configureStore, combineReducers } from '@reduxjs/toolkit';
import weatherSliceReducer from '@/features/weather/slice';
import uiSliceReducer from '@/features/ui/slice';

const rootReducer = combineReducers({
  weatherStore: weatherSliceReducer,
  uiStore: uiSliceReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
