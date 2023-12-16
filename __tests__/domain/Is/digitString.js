import Is from '../../../src/domain/Is.js';

describe('digitString()', () => {
  test.each([['1'], ['1.1'], ['-1'], ['0'], ['-1.3'], ['-1.0'], ['-0.0']])(
    'true',
    input => {
      //when
      const result = Is.digitString(input);

      //then
      expect(result).toBe(true);
    }
  );

  test.each([
    ['-'],
    ['1.'],
    ['.1'],
    ['0x1'],
    ['0o12'],
    ['0b12'],
    ['-.'],
    ['a'],
  ])('false', input => {
    //when
    const result = Is.digitString(input);

    //then
    expect(result).toBe(false);
  });
});
