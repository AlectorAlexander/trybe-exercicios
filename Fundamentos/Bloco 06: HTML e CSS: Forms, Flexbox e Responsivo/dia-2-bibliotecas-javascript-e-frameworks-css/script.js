
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
bi.addEventListener("click", tres)
let cpf = document.getElementById("cpf")
let endereco = document.getElementById("Endereço")
let cidade = document.getElementById("Cidade")
let ultimoCargo = document.getElementById("colon")
let cargo = document.getElementById("Cargo")
let data = document.getElementById("date")



