

import JustValidate from '../../node_modules/just-validate/dist/just-validate.es.js';

const validation = new JustValidate('#form');

validation.addField('#name', [
    {
        rule: 'required',
        errorMessage: 'Cadê o nome?',
      },
    {
      rule: 'maxLength',
      value: 40,
      errorMessage: 'Que nome longo, cara. Escolha outro',
    },
  ])
  validation.addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Cadê o email, otário?',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
  ]);


let estado = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espirito Santo", "Goiás", "Maranhão", "Mato Grosso do Sul", "Mato Grosso", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"]
let estadosSelected = document.getElementById("estados");
for (let index = 0; index < estado.length; index++) {
    const element = estado[index];
    let option = document.createElement("option")
    option.innerText=element;
    estadosSelected.appendChild(option)
    
}
let date = document.getElementById("date")
let bi = document.getElementById("buton")
let cpf = document.getElementById("cpf")
let endereco = document.getElementById("Endereço")
let cidade = document.getElementById("Cidade")
let ultimoCargo = document.getElementById("colon")
let cargo = document.getElementById("Cargo")
let data = document.getElementById("date")