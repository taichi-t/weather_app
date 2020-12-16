import { API_KEY, DEFAULT_CITY } from '@/constants/index';
import Axios, { AxiosInstance } from 'axios';

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

type GetRequet<T> = (param: T) => Promise<WeatherResponse>;

class WeatherAPI {
  axios: AxiosInstance;

  constructor() {
    this.axios = Axios.create({
      timeout: 10000, // 10 seconds
    });
  }

  fetchWeatherByCityName: GetRequet<string> = async (cityName) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${
      cityName || DEFAULT_CITY
    }&appid=${API_KEY}`;
    try {
      const res = await this.axios.get<WeatherResponse>(url);
      return res.data;
    } catch (err) {
      return Promise.reject(
        new Error(err.response.data.message || err.message)
      );
    }
  };

  fetchWeatherByGeocode: GetRequet<{
    latitude: number;
    longitude: number;
  }> = async (geocode) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${geocode.latitude}&lon=${geocode.longitude}&appid=${API_KEY}`;
    try {
      const res = await this.axios.get<WeatherResponse>(url);
      return res.data;
    } catch (err) {
      return Promise.reject(
        new Error(err.response.data.message || err.message)
      );
    }
  };
}

export const weatherApi = new WeatherAPI();
