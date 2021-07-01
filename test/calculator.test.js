const calculator = require('../src/calculator');

describe('calculator functions', () => {
  test('expect sum 2 + 3 to be 5', () => {
    expect(calculator.sum(2, 3)).toBe(5);
  });

  test('expect substraction 5 - 3 to be 2', () => {
    expect(calculator.subs(5, 3)).toBe(2);
  });

  test('expect multiplication 5 * 5 to be 25', () => {
    expect(calculator.multiply(5, 5)).toBe(25);
  });

  test('expect divition 25 / 5 to be 5', () => {
    expect(calculator.divide(25, 5)).toBe(5);
  });
});