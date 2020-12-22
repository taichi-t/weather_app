import { WeatherAPI } from 'src/api/weather';
import axios from 'axios';

/* eslint-disable  @typescript-eslint/no-explicit-any */

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.create.mockReturnValue(mockedAxios);
const weatherApi = new WeatherAPI();

describe('weatherApi test', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should throw Error when the request is failed', async () => {
    mockedAxios.get.mockRejectedValue(new Error('failed'));
    await expect(weatherApi.fetchWeather('')).rejects.toThrow();
  });
  it('should return resolve object when the request is success', async () => {
    mockedAxios.get.mockResolvedValue({ data: 'success' });
    const res = await weatherApi.fetchWeather('');
    expect(res).toBe('success');
  });
});
