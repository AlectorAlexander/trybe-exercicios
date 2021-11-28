//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
function calculo (num1, num2, operacao){
    const a = num1;
    const b = num2;
    var resultado;
    switch(operacao){
        case "+":
        resultado = a + b;
        break;
        case "-":
        resultado = a-b;
        break;
        case "/":
        resultado = a / b;
        break;
        case "*":
        resultado = a * b;
        break;
        case "%":
        resultado = a % b;
        break;
    }
    return resultado;
}