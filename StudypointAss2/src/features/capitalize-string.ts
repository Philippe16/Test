import { defineFeature, loadFeature } from 'jest-cucumber';
import StringUtility from '../../src/stringUtility';

const feature = loadFeature('./src/features/capitalize-string.feature');

defineFeature(feature, (test) => {
  let inputString: string;
  let result: string;

  test('Capitalizing a string', ({ given, when, then }) => {
    given(/^a string "(.*)"$/, (string: string) => {
      inputString = string;
    });

    when('I capitalize the string', () => {
      result = StringUtility.capitalizeString(inputString);
    });

    then(/^the result should be "(.*)"$/, (string: string) => {
      expect(result).toBe(string);
    });
  });

});
