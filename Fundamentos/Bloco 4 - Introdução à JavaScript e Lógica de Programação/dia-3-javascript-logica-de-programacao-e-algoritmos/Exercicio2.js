//Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
var n = 5;
var asterisco= " ";

for (let i = 0; i < n; i++) {
    
    for (let id = 0; id < n; id++){
       
    
if (n>1 && i==id){
    asterisco += "*";
}
}   console.log(asterisco)
}