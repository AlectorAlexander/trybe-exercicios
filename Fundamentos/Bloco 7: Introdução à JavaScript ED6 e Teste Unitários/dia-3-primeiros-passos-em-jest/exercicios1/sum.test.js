const sum = require('./sum.js')


test('soma dois valores', () => {
expect(sum(4,5)).toBe(9);
});
test('soma dois zeros', () => {
    expect(sum(0,0)).toBe(0);
});
test('Se dá erro quando um dos valores é uma string', () => {
    expect(() => { sum(4,"5") }).toThrow();
})
test('Se dá erro quando um dos valores é uma string', () => {
    expect(() => { sum(4,"5") }).toThrowError(new Error('parameters must be numbers'));
})