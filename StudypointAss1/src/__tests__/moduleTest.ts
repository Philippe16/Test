// src/__tests__/myModule.test.ts
import { add } from '../module';

test('add function should return the sum of two numbers', () => {
  expect(add(2, 3)).toBe(5);
});

test('add function should return the sum of two numbers', () => {
    expect(add(5, 10)).toBe(15);
  });