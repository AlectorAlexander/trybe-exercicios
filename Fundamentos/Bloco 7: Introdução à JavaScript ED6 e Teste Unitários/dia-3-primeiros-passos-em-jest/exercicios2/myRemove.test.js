const myRemove = require('./myRemove.js')

test('Verifica se volta o array esperado (1, 2, 4)', () => {
    expect(myRemove([1, 2, 3, 4],3)).toEqual([ 1, 2, 4]);
    });
test('Verifica se NÃO retorna o valor colocado no primeiro parâmetro', () => {
        expect(myRemove([1, 2, 3, 4],3)).not.toEqual([ 1, 2, 3, 4]);
        });

test('Verifica se volta o array esperado (1, 2, 3, 4)', () => {
    expect(myRemove([1, 2, 3, 4],5)).toEqual([ 1, 2, 3, 4]);
    });