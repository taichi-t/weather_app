import { createSlice } from '@reduxjs/toolkit';
import { weatherExtraReducers } from './reducers';
import { WeatherState } from './type';

const initialState: WeatherState = {
  weather: {
    condition: undefined,
    temperature: undefined,
    loading: true,
    error: undefined,
  },
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: weatherExtraReducers,
});

export default weatherSlice.reducer;

export const weatherSelector = (state: {
  weatherStore: WeatherState;
}): WeatherState => {
  return state.weatherStore;
};
