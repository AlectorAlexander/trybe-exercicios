//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
function palindromo (palavra){
    var resultado = false
for (let letras in palavra){
    if (palavra[letras] == palavra[(palavra.length - 1) - letras]) {resultado = true;
}else{ resultado = false}
}return resultado
}
console.log(palindromo("ARARA"))