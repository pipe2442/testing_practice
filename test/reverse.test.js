const reverse = require('../src/reverse');

describe("reverse string function", () => {
    test('It should return the reversed string', () => {
        expect(reverse('javascript')).toBe('tpircsavaj');
    });
    
    test('User introduces integer instead of string', () => {
        expect(reverse(5)).toBe("");
    });
})