const myFizzBuzz = require('./myFizzBuzz')

test('Verifica se volta a string esperada quando um numero é divisivel por 3 e 5', () => {
    expect(myFizzBuzz (15)).toBe('fizzbuzz');
    });
test('Verifica se volta a string esperada quando um numero é divisivel por 3', () => {
    expect(myFizzBuzz (9)).toBe('fizz');
    });    
test('Verifica se volta a string esperada quando um numero é divisivel por 5', () => {
    expect(myFizzBuzz (10)).toBe('buzz');
    });  
test('Verifica se volta o numero inserido, quando este não é divisivel por 5 ou 3', () => {
    expect(myFizzBuzz (7)).toBe(7);
    });  
test('Verifica se volta a false quando é preenchido por um valor não-numérico', () => {
    expect(myFizzBuzz ('sapo')).toBe(false);
    });  

