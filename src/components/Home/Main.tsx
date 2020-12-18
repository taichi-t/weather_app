import * as React from 'react';
import { weatherSelector } from '@/features/weather/slice';
import { uiSelector } from '@/features/ui/slice';
import { useSelector } from 'react-redux';
import WeatherIcon from 'react-icons-weather';
import returnTempSymbol from '@/util/returnTempSymbol';

const Main: React.FC = () => {
  const { weather } = useSelector(weatherSelector);
  console.log(weather);
  const { ui } = useSelector(uiSelector);
  return (
    <>
      <h2 className="text-center text-5xl text-secondaryText mt-16 font-bold">
        {weather.data?.name}, {weather.data?.sys.country}
      </h2>
      <div className="mt-12 flex justify-center">
        <WeatherIcon
          name="owm"
          iconId={weather.data ? String(weather.data.weather[0].id) : '200'}
          flip="horizontal"
          rotate="90"
          className="fill-current text-primaryText text-super"
        />
        <span className="text-6xl text-primaryText font-bold self-end">
          {Math.round(weather.data?.main.temp as number)}
          {returnTempSymbol(ui.units)}
        </span>
      </div>
    </>
  );
};

export default Main;
