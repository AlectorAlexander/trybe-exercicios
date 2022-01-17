const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

 let fazedor = (objeto, keyName, keyValue) => {
    let newKey = keyName;
    let newValue = keyValue;
    objeto[newKey] = newValue;
    console.log(objeto)
} 
fazedor(lesson2, 'turno', 'noite')

let listador = (objeto) => { console.log(Object.keys(objeto))}

let medidor = (objeto) => { console.log(Object.keys(objeto).length)}

let allLessons = {lesson1, lesson2, lesson3}
//Object.assign(allLessons,{}, lesson1,{}, lesson2,{}, lesson3)

let unificador = () => {
    let n1 =allLessons.lesson1.numeroEstudantes
    let n2 =allLessons.lesson2.numeroEstudantes
    let n3 =allLessons.lesson3.numeroEstudantes
console.log(n1 + n2 + n3)
}

let descobridor = (objeto, position) => {
    let array = Object.keys(objeto);
    console.log(array[position])
}

let simOuNao = (objeto, key, value) => {
    let resultado = false;
    let arrayDeCoisas = Object.entries(objeto)
    for (const ky in arrayDeCoisas) {
            if (arrayDeCoisas[ky][0] == key && arrayDeCoisas[ky][1] == value ){
                resultado = true
            }

    }
    console.log(resultado)
}
simOuNao(lesson2, 'materia', 'História')
