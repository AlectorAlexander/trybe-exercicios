//Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var Maior=0;
for (let index = 0; index < numbers.length; index++) {

    if (numbers[index] > Maior) {      
    Maior=numbers[index]
    }
}for (let index = 0; index < numbers.length; index++) {

    if (numbers[index] < Maior) {      
    Maior=numbers[index]
    } 
}console.log(Maior)