const fs = require('fs').promises;

// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.
function readAll() {
  fs.readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => {
      const simpson = JSON.parse(fileContent)
      simpson.map((element, i) => console.log(`${element.id} - ${element.name} `))
    })
    .catch((err) => console.log(err.message))
}

  readAll();

  // Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
const findID = (aiDi) => {
    fs.readFile('./simpsons.json', 'utf-8')
      .then((fileContent) => {
        const simpson = JSON.parse(fileContent)
        const bool = simpson.some(({ id }) => id == aiDi)
        if(bool) {
        const result = simpson.find(({ id }) => id == aiDi)
        return console.log(`${result.id} - ${result.name} `)
        } else {
          throw new Error('id não encontrado')
        }
      })
      .catch((err) => console.log(err.message))
} 
findID(32)

// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
const DeleteID = () => {
  fs.readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => {
      const simpson = JSON.parse(fileContent)
      const result = simpson.filter(({ id }) => id !== '10' && id !== '6')
      fs.writeFile('./simpsons.json', JSON.stringify(result))
    })
    .catch((err) => console.log(err.message))
} 
DeleteID()

// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.
const newFile = () => {
  fs.readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => {
      const simpson = JSON.parse(fileContent)
      const result = simpson.filter(({ id }) => JSON.parse(id) < 5 )
      fs.writeFile('./simpsonsFamily.json', JSON.stringify(result))
    })
    .catch((err) => console.log(err.message))
} 
newFile()

// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
const addToTheFile = () => {
  fs.readFile('./simpsonsFamily.json', 'utf-8')
    .then((fileContent) => {
      const simpson = JSON.parse(fileContent)
      const result = {...simpson, '4': {id:"5",name:"Nelson Muniz"} }
      fs.writeFile('./simpsonsFamily.json', JSON.stringify(result))
    })
    .catch((err) => console.log(err.message))
} 
addToTheFile()