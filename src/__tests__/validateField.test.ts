import validateField from '../util/validateField';

describe('validate field fn test', () => {
  it('should return false when value is empty', () => {
    validateField('', (isValid, message) => {
      expect(isValid).toBe(false);
      expect(message).toBe('Please enter city name');
    });
  });
  it('should return false when value is not alphabetical letters', () => {
    validateField('#', (isValid, message) => {
      expect(isValid).toBe(false);
      expect(message).toBe('Please enter only alphabetical letters.');
    });
    validateField('3', (isValid, message) => {
      expect(isValid).toBe(false);
      expect(message).toBe('Please enter only alphabetical letters.');
    });
  });
});
