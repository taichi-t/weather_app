import { createAsyncThunk } from '@reduxjs/toolkit';
import { weatherApi } from '@/api/weather';
import { WeatherResponse } from './type';

const fetchWeather = createAsyncThunk<WeatherResponse, string>(
  'weather/fetchWeather',
  async (url) => weatherApi.fetchWeather(url)
);

export default fetchWeather;
