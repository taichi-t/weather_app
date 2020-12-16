import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { fetchWeatherByCityName, fetchWeatherByGeocode } from './asyncActions';
import { WeatherState } from './type';

export const weatherExtraReducers = (
  builder: ActionReducerMapBuilder<WeatherState>
): void => {
  // fetchWeatherByCityName
  builder.addCase(fetchWeatherByCityName.fulfilled, (state, action) => {
    state.weather = {
      data: action.payload,
      loading: false,
      error: undefined,
    };
  });
  builder.addCase(fetchWeatherByCityName.pending, (state) => {
    state.weather = {
      data: undefined,
      loading: true,
      error: undefined,
    };
  });
  builder.addCase(fetchWeatherByCityName.rejected, (state, action) => {
    state.weather = {
      data: undefined,
      error: action.error.message,
      loading: false,
    };
  });
  // fetchWeatherByGeocode
  builder.addCase(fetchWeatherByGeocode.fulfilled, (state, action) => {
    state.weather = {
      data: action.payload,
      loading: false,
      error: undefined,
    };
  });
  builder.addCase(fetchWeatherByGeocode.pending, (state) => {
    state.weather = {
      data: undefined,
      loading: true,
      error: undefined,
    };
  });
  builder.addCase(fetchWeatherByGeocode.rejected, (state, action) => {
    state.weather = {
      data: undefined,
      error: action.error.message,
      loading: false,
    };
  });
};

export default weatherExtraReducers;
