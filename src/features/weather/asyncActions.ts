import { createAsyncThunk } from '@reduxjs/toolkit';
import { weatherApi } from '@/api/weather';
import { WeatherResponse } from './type';

const fetchWeatherByCityName = createAsyncThunk<WeatherResponse>(
  'weather/fetchWeatherByCityName',
  async () => weatherApi.fetchWeatherByCityName('vancouver')
);
const fetchWeatherByGeocode = createAsyncThunk<
  WeatherResponse,
  { latitude: number; longitude: number }
>('weather/fetchWeatherByGeocode', async (geocode) =>
  weatherApi.fetchWeatherByGeocode(geocode)
);

export { fetchWeatherByCityName, fetchWeatherByGeocode };
