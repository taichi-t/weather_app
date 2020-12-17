import * as React from 'react';
import { weatherSelector } from '@/features/weather/slice';
import { useDispatch, useSelector } from 'react-redux';
import fetchWeather from '@/features/weather/asyncActions';
import { API_KEY, BASE_URL, DEFAULT_CITY_ID } from '@/constants/index';
import createRequestUrl from '@/util/createRequestUrl';
import { uiSelector, setUnits, setTheme } from '@/features/ui/slice';

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

  return (
    <div>
      <button type="button" onClick={handleSetUnits}>
        {ui.units === 'standard' ? <p>F to C</p> : <p>C to F</p>}
      </button>
      <button type="button" onClick={handleSetTheme}>
        darkmode
      </button>
    </div>
  );
};

export default Header;
