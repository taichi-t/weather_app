import * as React from 'react';
import { weatherSelector } from '@/features/weather/slice';
import { useSelector } from 'react-redux';
import { uiSelector } from '@/features/ui/slice';
import returnTempSymbol from '@/util/returnTempSymbol';
import { List } from 'react-content-loader';

const Description: React.FC = () => {
  const { weather } = useSelector(weatherSelector);

  const { ui } = useSelector(uiSelector);
  const renderDescription = () => {
    if (weather.loading) {
      return (
        <List
          backgroundColor="var(--color-paper)"
          foregroundColor="var(--color-skeleton)"
        />
      );
    }
    if (weather.error) {
      return false;
    }
    return (
      <>
        <h2 className="text-secondaryText font-bold">
          feel like {Math.round(weather.data?.main.feels_like as number)}
          {returnTempSymbol(ui.units)}, {weather.data?.weather[0].description}.
        </h2>
        <ul className=" border-l-2 border-key px-4 text-secondaryText text-base flex flex-wrap mt-2">
          <li className="mr-3">
            <i
              className={`wi wi-wind towards-${weather.data?.wind.deg}-deg `}
            />{' '}
            {weather.data?.wind.speed} m/s
          </li>
          <li className="mr-3">
            <i className="wi wi-barometer" /> {weather.data?.main.pressure} hPa
          </li>
          <li className="mr-3">
            <i className="wi wi-humidity" /> {weather.data?.main.humidity} %
          </li>
          <li className="mr-3">Visivility: {weather.data?.visibility} </li>
          <li className="mr-3">
            <i className="wi wi-umbrella" /> {weather.data?.rain?.['1h']} mm/h
          </li>
          <li className="mr-3">
            <i className="wi wi-thermometer" /> {weather.data?.main.temp_max}{' '}
            {returnTempSymbol(ui.units)}
          </li>
          <li>
            <i className="wi wi-thermometer-exterior" />{' '}
            {weather.data?.main.temp_min} {returnTempSymbol(ui.units)}
          </li>
        </ul>
      </>
    );
  };
  return <div className="inner-wrap mt-12">{renderDescription()}</div>;
};

export default Description;
