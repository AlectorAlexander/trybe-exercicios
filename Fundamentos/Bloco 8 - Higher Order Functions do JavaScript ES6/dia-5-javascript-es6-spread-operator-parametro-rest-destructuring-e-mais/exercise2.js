//Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
const sum = (...args) => args.reduce((acumulator, current) => acumulator + current);
console.log(sum(4, 7, 8, 9, 60));