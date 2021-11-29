//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var soma = 0;
var media = numbers.length;
for (var i of numbers){

   soma += i;
    
}console.log(soma / numbers.length)