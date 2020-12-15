import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export type WeatherResponse = {
  coord: { lon: number; lat: number };
  weather: [{ id: number; main: string; description: string; icon: string }];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: { speed: number; deg: number; gust: number };
  rain: { '1h': number };
  clouds: { all: number };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export const fetchWeather = createAsyncThunk<WeatherResponse>(
  'weather/fetchWeather',
  async (_, thunkApi) => {
    const APIKEY = process.env.WEATHER_API_KEY;
    const city = 'vancouver';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;
    try {
      const res = await axios.get<WeatherResponse>(url);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export default fetchWeather;
