function lucroDoProduto(valor, custo){
    custo = custo + ((custo / 100) *20);
     var retorno = valor - custo;
     if (valor < 0 || custo < 0) {
         retorno = "erroQuatrocentro-eQuatro"
     }
     return retorno;
}