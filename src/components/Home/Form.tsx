import * as React from 'react';
import { useForm } from '@/hooks/useForm';
import validateCity from '@/util/validateField';
import { useDispatch, useSelector } from 'react-redux';
import fetchWeather from '@/features/weather/asyncActions';
import { API_KEY, BASE_URL } from '@/constants/index';
import createRequestUrl from '@/util/createRequestUrl';
import { uiSelector } from '@/features/ui/slice';

export const Form: React.FC = () => {
  const { ui } = useSelector(uiSelector);
  const dispatch = useDispatch();
  const [value, onChange] = useForm('');
  const [error, setError] = React.useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateCity(value, (isValid, message) => {
      if (!isValid) {
        setError(message);
      } else {
        setError('');
        const params = {
          units: ui.units,
          q: value,
          appid: API_KEY as string,
        };
        const url = createRequestUrl(BASE_URL, params);
        dispatch(fetchWeather(url));
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="city">
          <input type="city" id="city" value={value} onChange={onChange} />
        </label>
        <p>{error}</p>
      </div>
    </form>
  );
};

export default Form;
