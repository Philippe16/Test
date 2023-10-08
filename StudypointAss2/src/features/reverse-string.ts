import { defineFeature, loadFeature } from 'jest-cucumber';
import StringUtility from '../../src/stringUtility';

const feature = loadFeature('./src/features/reverse-string.feature');

defineFeature(feature, (test) => {
  let inputString: string;
  let result: string;

  test('Reversing a string', ({ given, when, then }) => {
    given(/^a string "(.*)"$/, (string: string) => {
      inputString = string;
    });

    when('I reverse the string', () => {
      result = StringUtility.reverseString(inputString);
    });

    then(/^the result should be "(.*)"$/, (string: string) => {
      expect(result).toBe(string);
    });
  });
});

