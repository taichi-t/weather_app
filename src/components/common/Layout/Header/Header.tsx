import * as React from 'react';
import { weatherSelector } from '@/features/weather/slice';
import { useDispatch, useSelector } from 'react-redux';
import fetchWeather from '@/features/weather/asyncActions';
import { API_KEY, BASE_URL, DEFAULT_CITY_ID } from '@/constants/index';
import createRequestUrl from '@/util/createRequestUrl';
import { uiSelector, setUnits, setTheme } from '@/features/ui/slice';
import { Form } from '@/components/Home/Form';
import BrightnessHeight from '@/images/brightness-high.svg';
import BrightnessLow from '@/images/brightness-low.svg';

const Header: React.FC = () => {
  const { weather } = useSelector(weatherSelector);
  const { ui } = useSelector(uiSelector);
  const dispatch = useDispatch();

  const handleSetUnits = () => {
    const params = {
      units: ui.units === 'standard' ? 'metric' : 'standard',
      id: String(weather.data?.id) || DEFAULT_CITY_ID,
      appid: API_KEY as string,
    };
    const url = createRequestUrl(BASE_URL, params);
    dispatch(fetchWeather(url));
    dispatch(setUnits());
  };

  const handleSetTheme = () => {
    dispatch(setTheme());
  };

  const themeToggleButtom =
    ui.theme === 'theme-light' ? (
      <BrightnessLow className="h-5 w-5 fill-current text-secondaryText" />
    ) : (
      <BrightnessHeight className="h-5 w-5 fill-current text-secondaryText" />
    );

  return (
    <div className="flex justify-between mt-12 items-center">
      <Form />
      <div className="inline-flex items-center">
        <div className=" mr-4">
          <button
            type="button"
            name="fahrenheit"
            onClick={handleSetUnits}
            className={`rounded-r-none rounded-md border-r-0 border-2 border-secondaryText w-9 ${
              ui.units === 'standard' ? 'bg-gray-300' : ''
            }`}
          >
            <span className="text-secondaryText">℉</span>
          </button>
          <button
            type="button"
            name="celsius"
            onClick={handleSetUnits}
            className={`rounded-l-none rounded-md border-l-1 border-2 border-secondaryText w-9 ${
              ui.units === 'metric' ? 'bg-gray-300' : ''
            }`}
          >
            <span className="text-secondaryText">℃</span>
          </button>
        </div>
        <button type="button" onClick={handleSetTheme}>
          {themeToggleButtom}
        </button>
      </div>
    </div>
  );
};

export default Header;
