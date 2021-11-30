// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
var n = 5;


for (let linha = 0; linha < n; linha++) {
    var dj = " ";
    for (let coluna = 0; coluna < n; coluna++){
    dj += "*";
}
   console.log(dj)
}

