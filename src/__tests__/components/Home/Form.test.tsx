import * as React from 'react';
import { Form } from '@/components/Home/Form';
import { render, fireEvent } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import { uiSelector } from '@/features/ui/slice';
import validateCity from '@/util/validateField';

jest.mock('react-redux', () => ({
  useSelector: jest.fn((fn) => fn()),
  useDispatch: () => jest.fn(),
}));
jest.mock('@/features/ui/slice');
jest.mock('@/util/validateField');

mocked(uiSelector).mockReturnValue({
  ui: {
    units: 'standard',
    theme: 'theme-light',
  },
});

describe('<Form>', () => {
  it('should show error message when validation is failed', () => {
    const errorMessage = 'failed';
    const isValid = false;
    mocked(validateCity).mockImplementation((_, cb) => {
      cb(isValid, errorMessage);
    });
    const { getByTestId } = render(<Form />);
    const button = getByTestId('button') as HTMLButtonElement;
    const input = getByTestId('input') as HTMLInputElement;
    input.value = errorMessage;
    fireEvent.click(button);
    const errorElement = getByTestId('error-message') as HTMLParagraphElement;
    expect(errorElement.textContent).toBe('failed');
  });
});
