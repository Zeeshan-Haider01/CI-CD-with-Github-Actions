const greet = require('./index');

test('greet function', () => {
  expect(greet('Zeeshan')).toBe('Hello, Zeeshan!');
});
