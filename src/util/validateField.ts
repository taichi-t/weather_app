const validateCity = (
  city: string,
  cb: (isValid: boolean, message: string) => void
): void => {
  let isValid = true;
  let message = '';

  if (!city) {
    isValid = false;
    message = 'Please enter city name';
    return cb(isValid, message);
  }
  if (!/^[a-zA-Z]+$/.test(city)) {
    isValid = false;
    message = 'Please enter only alphabetical letters.';
    return cb(isValid, message);
  }

  return cb(isValid, message);
};
export default validateCity;
