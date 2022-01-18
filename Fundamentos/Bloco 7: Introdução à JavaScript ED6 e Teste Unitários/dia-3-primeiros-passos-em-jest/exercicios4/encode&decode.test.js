const { encode, decode } = require('./encode&decode')

/*4 - Para as funções encode e decode crie os seguintes testes em Jest:
1- Teste se encode e decode são funções;
2 -Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
3 - Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente;
4 - Teste se as demais letras/números não são convertidos para cada caso;
5 - Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro. */

test('Verifica se "encode" é uma função', () => {
    expect(typeof encode).toEqual('function');
    });

test('Verifica se "decode" é uma função', () => {
    expect(typeof decode).toEqual('function');
    });

    test('Verifica se vogais se tornam numeros em encode', () => {
        expect(encode("a e i o u")).toBe("1 2 3 4 5");
        });
     test('Verifica se numeros se tornam vogais em decode', () => {
        expect(decode("1 2 3 4 5")).toBe("a e i o u");
        });
     test('Verifica se a vira 1', () => {
        expect(encode("fama")).toBe("f1m1");
        });
     test('Verifica se se e vira 2', () => {
        expect(encode("Pele")).toBe("P2l2");
        });
     test('Verifica se i vira 3', () => {
        expect(encode("xixi")).toBe("x3x3");
        });
    test('Verifica se o vira 4', () => {
        expect(encode("coco")).toBe("c4c4");
        });
    test('Verifica se u vira 5', () => {
        expect(encode("sul")).toBe("s5l");
        });
     test('Verifica se  1 vira a', () => {
        expect(decode("f1m1")).toBe("fama");
        });
     test('Verifica se se  2 vira e', () => {
        expect(decode("P2l2")).toBe("Pele");
        });
     test('Verifica se  3 vira i', () => {
        expect(decode("x3x3")).toBe("xixi");
        });
    test('Verifica se  4 vira o', () => {
        expect(decode("c4c4")).toBe("coco");
        });
    test('Verifica se  5 vira u', () => {
        expect(decode("s5l")).toBe("sul");
        });
    test('Verifica se  o tamanho é o mesmo na entrada e na saída', () => {
        expect(decode('moonligth').length).toEqual(9);
        });