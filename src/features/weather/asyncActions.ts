import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { WeatherResponse } from './type';

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
