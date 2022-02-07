/**4 - Para as funções encode e decode crie os seguintes testes em Jest:
Teste se encode e decode são funções;
Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente;
Teste se as demais letras/números não são convertidos para cada caso;
Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro. */
function encode(string) {
    for (let index = 0; index < string.length; index++) {
      
   
    string = string.replace(/a/g, "1");
    string = string.replace(/e/g, "2");
    string = string.replace(/i/g, "3");
    string = string.replace(/o/g, "4");
    string = string.replace(/u/g, "5");
  } 
      
  return string
  } 
  
  function decode(string) {
    for (let index = 0; index < string.length; index++) {
    string = string.replace = string.replace(/1/g, "a")
    string = string.replace = string.replace(/2/g, "e")
    string = string.replace = string.replace(/3/g, "i")
    string = string.replace = string.replace(/4/g, "o")
    string = string.replace = string.replace(/5/g, "u")
  } 
      
  return string
  }

  const functions = { encode, decode };
  module.exports = functions;