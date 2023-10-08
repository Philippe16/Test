import { celsiusToFahrenheit } from '../celsiusToFahrenheit';

import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/scenarios.feature');

defineFeature(feature, (test) => {
  let celesius: number;
  let fahrenheit: number;

  test('Convert Celsius to Fahrenheit', ({ given, when, then }) => {
    given(/^a temperature of (\d+)°C$/, (temp) => {
        celesius = temp;
    });

    when('I convert it to Fahrenheit using the celsiusToFahrenheit function', () => {
        fahrenheit = celsiusToFahrenheit(celesius);
    });

    then(/^the result should be (\d+)°F$/, (expectedResult) => {
      expect(fahrenheit).toBe(Number(expectedResult));
    });
  });
  
  // Define other scenarios similarly...
});
