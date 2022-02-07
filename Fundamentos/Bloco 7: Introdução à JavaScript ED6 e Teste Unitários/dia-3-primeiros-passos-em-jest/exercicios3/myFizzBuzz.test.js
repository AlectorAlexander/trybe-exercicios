const myFizzBuzz = require('./myFizzBuzz')
/**3 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado */
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

