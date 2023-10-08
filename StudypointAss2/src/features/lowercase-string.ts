import { defineFeature, loadFeature } from 'jest-cucumber';
import StringUtility from '../../src/stringUtility';

const feature = loadFeature('./src/features/lowercase-string.feature');

defineFeature(feature, (test) => {
  let inputString: string;
  let result: string;

  test('Lowercasing a string', ({ given, when, then }) => {
    given(/^a string "(.*)"$/, (string: string) => {
      inputString = string;
    });

    when('I lowercase the string', () => {
      result = StringUtility.lowercaseString(inputString);
    });

    then(/^the result should be "(.*)"$/, (string: string) => {
      expect(result).toBe(string);
    });
  });
});
