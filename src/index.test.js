const { add } = require('./index');

describe('add spec', () => {
  test('should summ two passed numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
});
