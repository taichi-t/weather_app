import * as React from 'react';
import Description from '@/components/Home/Description';
import { render } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import { uiSelector } from '@/features/ui/slice';
import { weatherSelector } from '@/features/weather/slice';
import { WeatherResponse } from '@/features/weather/type';

jest.mock('react-redux', () => ({
  useSelector: jest.fn((fn) => fn()),
}));
jest.mock('@/features/ui/slice');
jest.mock('@/features/weather/slice');
jest.spyOn(global.Math, 'random').mockImplementation(() => 0);

mocked(uiSelector).mockReturnValue({
  ui: {
    units: 'standard',
    theme: 'theme-light',
  },
});

describe('<Description>', () => {
  beforeEach(() => {
    mocked(uiSelector).mockClear();
  });

  it('renders when loading', () => {
    mocked(weatherSelector).mockReturnValue({
      weather: {
        data: undefined,
        loading: true,
        error: undefined,
      },
    });
    const tree = render(<Description />);
    expect(tree).toMatchSnapshot();
  });

  it('renders when data is loaded', () => {
    const weatherState: WeatherResponse = {
      coord: { lon: 1, lat: 1 },
      weather: [
        { id: 1, main: 'string', description: 'string', icon: 'string' },
      ],
      base: 'string',
      main: {
        temp: 1,
        feels_like: 1,
        temp_min: 1,
        temp_max: 1,
        pressure: 1,
        humidity: 1,
      },
      visibility: 1,
      wind: { speed: 1, deg: 1, gust: 1 },
      rain: { '1h': 1 },
      clouds: { all: 1 },
      dt: 1,
      sys: {
        type: 1,
        id: 1,
        country: 'string',
        sunrise: 1,
        sunset: 1,
      },
      timezone: 1,
      id: 1,
      name: 'string',
      cod: 1,
    };
    mocked(weatherSelector).mockReturnValue({
      weather: {
        data: weatherState,
        loading: false,
        error: undefined,
      },
    });
    const tree = render(<Description />);
    expect(tree).toMatchSnapshot();
  });

  it('renders when getting error', () => {
    mocked(weatherSelector).mockReturnValue({
      weather: {
        data: undefined,
        loading: false,
        error: 'error',
      },
    });
    const tree = render(<Description />);
    expect(tree).toMatchSnapshot();
  });
});
