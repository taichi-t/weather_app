import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { fetchWeather } from './asyncActions';
import { WeatherState } from './type';

export const weatherExtraReducers = (
  builder: ActionReducerMapBuilder<WeatherState>
): void => {
  builder.addCase(fetchWeather.fulfilled, (state, action) => {
    state.weather = {
      condition: action.payload.weather[0].description,
      temperature: action.payload.main.temp_max,
      loading: false,
      error: undefined,
    };
  });
  builder.addCase(fetchWeather.pending, (state) => {
    state.weather = {
      condition: undefined,
      temperature: undefined,
      loading: true,
      error: undefined,
    };
  });
  builder.addCase(fetchWeather.rejected, (state, action) => {
    state.weather = {
      condition: undefined,
      temperature: undefined,
      error: action.error.message,
      loading: false,
    };
  });
};

export default weatherExtraReducers;
