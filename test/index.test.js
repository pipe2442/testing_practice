const cap = require('../src/index');

test('capitalize the first letter of the world javascript', () => {
    expect(cap('javascript')).toBe('Javascript');
});
