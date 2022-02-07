/**Implemente a função hydrate a partir dos testes abaixo. Experimente refatorar a função que você criou para o projeto Playground Function! É importante nunca alterar os testes ou as variáveis já escritas no código . */
function hydrate(cachaca) {
 

    let bebida = cachaca;
    let reg = /\d+/g;
    let qtdAlcool = cachaca.match(reg);
    var numeros = 0;
    for (let index = 0; index < qtdAlcool.length; index++) {
      for (let i = 1; i <= 9; i++) {
        if (i == qtdAlcool[index]){
          numeros += i;
  
        }
        
      }
      
    }
    if (numeros == 1) {
      resultado = numeros + " copo de água"
    } else {
    resultado = numeros + " copos de água";}
   return  resultado;
  } 

  module.exports = hydrate