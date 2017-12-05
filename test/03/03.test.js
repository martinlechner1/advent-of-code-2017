const aoc = require('../../src/03/03.js');

describe('AOC 3', () => {
  test('On field 1 0 steps are required', () => {
    expect(aoc(1)).toEqual(0);
  });

  test('On field 8 1 steps are required', () => {
    expect(aoc(8)).toEqual(1);
  });

  test('On field 9 2 steps are required', () => {
    expect(aoc(9)).toEqual(2);
  });

  test('On field 10 3 steps are required', () => {
    expect(aoc(10)).toEqual(3);
  });
  test('On field 12 3 steps are required', () => {
    expect(aoc(12)).toEqual(3);
  });
  test('On field 14 3 steps are required', () => {
    expect(aoc(14)).toEqual(3);
  });

  test('On field 15 2 steps are required', () => {
    expect(aoc(15)).toEqual(2);
  });

  test('On field 16 3 steps are required', () => {
    expect(aoc(16)).toEqual(3);
  });
  test('On field 17 4 steps are required', () => {
    expect(aoc(17)).toEqual(4);
  });
  test('On field 18 3 steps are required', () => {
    expect(aoc(18)).toEqual(3);
  });
  test('On field 23 2 steps are required', () => {
    expect(aoc(23)).toEqual(2);
  });
  test('On field 25 4 steps are required', () => {
    expect(aoc(25)).toEqual(4);
  });
  test('On field 26 5 steps are required', () => {
    expect(aoc(26)).toEqual(5);
  });
  test('On field 27 4 steps are required', () => {
    expect(aoc(27)).toEqual(4);
  });
  test('On field 49 6 steps are required', () => {
    expect(aoc(49)).toEqual(6);
  });
  test('On field 1024 31 steps are required', () => {
    expect(aoc(1024)).toEqual(31);
  });
});
