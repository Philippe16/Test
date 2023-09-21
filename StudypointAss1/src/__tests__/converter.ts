import { fahrenheitToCelsius } from '../fahrenheitToCelsius';
import { celsiusToFahrenheit } from '../celsiusToFahrenheit';
import { romanToArabic } from '../romanToArabic';

test('Convert 0°C to Fahrenheit should return 32°F', () => {
  expect(celsiusToFahrenheit(0)).toBe(32);
});

test('Convert 32°F to Celsius should return 0°C', () => {
  expect(fahrenheitToCelsius(32)).toBe(0);
});

  
test('Convert 68°F to Celsius should return 20°C', () => {
    expect(fahrenheitToCelsius(68)).toBe(20);
});


test('Convert "IV" to Arabic should return 4', () => {
  expect(romanToArabic('IV')).toBe(4);
});


test('Convert "XXI" to Arabic should return 21', () => {
    expect(romanToArabic('XXI')).toBe(21);
  });