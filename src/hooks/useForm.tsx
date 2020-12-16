import * as React from 'react';

export const useForm = (
  initialValue: string
): [string, (e: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [value, setValue] = React.useState<string>(initialValue);

  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    []
  );

  return [value, onChange];
};

export default useForm;
