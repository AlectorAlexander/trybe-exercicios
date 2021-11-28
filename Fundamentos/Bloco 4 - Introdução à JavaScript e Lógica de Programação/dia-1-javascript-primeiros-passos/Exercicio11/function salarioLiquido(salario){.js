function salarioLiquido(salario){
    var INSS;
    var IR;
    
if (salario <= 1556.94) {
    INSS = (salario / 100) * 8; 
} else if (salario > 1556.94 && salario <= 2594.92) {
    INSS = (salario / 100) * 9;
} else if (salario > 2594.92 && salario <= 5189.82) {
    INSS = (salario / 100) * 11;
} else if (salario >  5189.82) {
    INSS = 570.88;
}
var inssDeduzido = salario - INSS;
if (salario <= 1903.98) {
    IR = 0;
} else if (inssDeduzido > 1903.98 && inssDeduzido <= 2826.65) {
    IR = (((salario - INSS) / 100) * 7.5) - 142.80;
} else if (inssDeduzido > 2826.65 && inssDeduzido  <=  3751,05) {
    IR = (((salario - INSS) / 100) * 15) - 354.80;
} else if (inssDeduzido > 3751.05 && sinssDeduzido <= 4664.68) {
    IR = (((salario - INSS) / 100) * 22.5) - 636.13;
} else if (inssDeduzido > 4664.68) {
    IR = (((salario - INSS) / 100) * 27.5) - 839.36;
}
var retorno = salario - INSS - IR;
return retorno;

}