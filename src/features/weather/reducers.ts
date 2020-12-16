import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { fetchWeather } from './asyncActions';
import { WeatherState } from './type';

export const weatherExtraReducers = (
  builder: ActionReducerMapBuilder<WeatherState>
): void => {
  builder.addCase(fetchWeather.fulfilled, (state, action) => {
    state.weather = {
      data: action.payload,
      loading: false,
      error: undefined,
    };
  });
  builder.addCase(fetchWeather.pending, (state) => {
    state.weather = {
      data: undefined,
      loading: true,
      error: undefined,
    };
  });
  builder.addCase(fetchWeather.rejected, (state, action) => {
    state.weather = {
      data: undefined,
      error: action.error.message,
      loading: false,
    };
  });
};

export default weatherExtraReducers;
