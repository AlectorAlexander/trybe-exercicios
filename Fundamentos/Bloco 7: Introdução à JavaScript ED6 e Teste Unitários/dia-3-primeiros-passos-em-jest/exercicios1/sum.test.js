const sum = require('./sum.js')
/*1 - A função sum(a, b) retorna a soma do parâmetro a com o b
Teste se o retorno de sum(4, 5) é 9
Teste se o retorno de sum(0, 0) é 0
Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")*/

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