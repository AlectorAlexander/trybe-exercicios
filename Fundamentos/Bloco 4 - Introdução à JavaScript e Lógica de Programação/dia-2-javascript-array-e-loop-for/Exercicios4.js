let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var soma = 0;
var media = numbers.length;
for (var i of numbers){

   soma += i;
    
}var mediaTotal = soma / numbers.length;
if (mediaTotal > 20){
    console.log("Valor maior que 20.")
}else{
    console.log("Valor menor ou igual a 20")
}