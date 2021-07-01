const cap = require('../src/index');

describe("capitalize function", () => {
    test('capitalize the first letter of the world javascript', () => {
        expect(cap('javascript')).toBe('Javascript');
    });
    
    test('User introduces integer instead of string', () => {
        expect(cap(2)).toBe("");
    });
})
