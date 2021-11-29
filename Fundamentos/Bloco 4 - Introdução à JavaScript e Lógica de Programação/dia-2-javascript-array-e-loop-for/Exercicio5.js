let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var resultado=0;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];

       
    if (numbers[index] > resultado) {
        
    resultado=numbers[index]
    }
    

}console.log(resultado);