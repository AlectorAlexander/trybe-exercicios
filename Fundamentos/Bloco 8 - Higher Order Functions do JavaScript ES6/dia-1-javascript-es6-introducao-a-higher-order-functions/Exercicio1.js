/*1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com . */
const deRetorno = (FullName) => {
    /* [Anotação] toLowerCase() = Deixa as letras minusculas. jon('_') = junta as palavras separada por split(' ') com um underline */
const email = FullName.toLowerCase().split(' ').join('_')
return {FullName, email: `${email}@betrybe.com`} 
}

const newEmployees = (meChama) => {
    const employees = {
      id1: meChama('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: meChama('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: meChama('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };


/*2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). */
const numeroAleatório = () => {
   let numero = Math.floor(Math.random() * 4)
    return numero + 1
}

const sorteio = (nA, nE) => {
    let mensagem;
    if (nA == nE) {
         mensagem = "Parabéns você ganhou!"
    } else {
        mensagem ="Tente novamente"
    }
    console.log (nA, nE)

    return mensagem
}

console.log(sorteio(numeroAleatório(), 2))