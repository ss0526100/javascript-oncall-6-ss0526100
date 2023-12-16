import Is from '../../../src/domain/Is.js';

describe('numberInRange()', () => {
  test.each([
    [10, 1, 20],
    [10, 10, 10],
    [10, -Infinity, Infinity],
    [0, 0, 0],
  ])('true', (number, lower, upper) => {
    //when
    const result = Is.numberInRange(number, lower, upper);

    //then
    expect(result).toBe(true);
  });

  test.each([
    [10, 1, 9],
    [9, 10, 20],
    [-1, 0, Infinity],
  ])('false', (number, lower, upper) => {
    //when
    const result = Is.numberInRange(number, lower, upper);

    //then
    expect(result).toBe(false);
  });
});
