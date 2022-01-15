let numeros = []
let resultado = 0;
let fatorial = (numero) => (numero === 1) ? 1  : numero *  fatorial(numero-1)
console.log(fatorial(5))