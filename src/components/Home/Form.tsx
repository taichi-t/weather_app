import * as React from 'react';
import { useForm } from '@/hooks/useForm';
import validateCity from '@/util/validateField';

export const Form: React.FC = () => {
  const [value, onChange] = useForm('');
  const [error, setError] = React.useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateCity(value, (isValid, message) => {
      if (!isValid) {
        setError(message);
      } else {
        setError('');
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="city">
          city
          <input type="city" id="city" value={value} onChange={onChange} />
        </label>
        <p>{error}</p>
      </div>
    </form>
  );
};

export default Form;
