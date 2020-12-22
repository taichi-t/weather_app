import { WeatherAPI } from 'src/api/weather';
import axios from 'axios';

/* eslint-disable  @typescript-eslint/no-explicit-any */

const weatherApi = new WeatherAPI();

const mockedAxios = jest.spyOn(axios, 'get');

describe('weatherApi test', () => {
  it('should throw Error when the request is failed', async () => {
    mockedAxios.mockImplementation(() => Promise.reject(new Error('failed')));
    await expect(weatherApi.fetchWeather('')).rejects.toThrow();
  });
  it('should return resolve object when the request is success', async () => {
    mockedAxios.mockImplementation(() => Promise.resolve('success'));
    await expect(weatherApi.fetchWeather('')).toBe('success');
  });
});
