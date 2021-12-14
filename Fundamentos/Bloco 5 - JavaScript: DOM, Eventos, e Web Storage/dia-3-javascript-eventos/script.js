function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();
calendario();
Exercicio7 ("Streamer:")
color ("green")
brasil ()
EUA ()



// Escreva seu código abaixo.

//Exercício 1
function calendario () {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  for (let di = 0; di < dezDaysList.length; di++) {
    const dia = dezDaysList[di];
    let lista = document.createElement("li")
    lista.innerText = dia;
    lista.className = "day"
    if(lista.innerText == 24 || lista.innerText == 25 || lista.innerText == 31) {
      lista.className += " holiday"
    }
    if (lista.innerText == 4 || lista.innerText == 11 ||lista.innerText == 18 || lista.innerText == 25){
      lista.className += " friday"
    }
    let ul = document.getElementById("days")
   
    ul.appendChild(lista)
 
  }
}

//Exercício 2

var botaoHoliday = document.createElement("button");
botaoHoliday.id = "btn-holiday";
botaoHoliday.innerText = "Feriados";
var buttonsContainer =  document.querySelector(".buttons-container");
buttonsContainer.appendChild(botaoHoliday);

//Exercicio 3

botaoHoliday.addEventListener("click", botaoFeriado)
var feriados = document.getElementsByClassName("holiday")

function botaoFeriado () {
  
  if(botaoHoliday.className != "ativado"){
    botaoHoliday.className +=  "ativado";
    for (const dia in feriados) {    
        feriados[dia].style.backgroundColor = "pink";
    }
  }else if (botaoHoliday.className == "ativado"){
    botaoHoliday.classList.remove("ativado");
    for (const dia in feriados) {    
        feriados[dia].style.backgroundColor = "#eee";
    }
  }
}
  

//Exercicio 4
var botaoFriday = document.createElement("button");
botaoFriday.id = "btn-friday";
botaoFriday.innerText = "Sexta-Feira";
buttonsContainer.appendChild(botaoFriday);

//Exercício 5
botaoFriday.addEventListener("click", botaoFrida)
var sexta = document.getElementsByClassName("friday")

function botaoFrida () {
  
  if(botaoFriday.className != "ativado"){
    botaoFriday.className +=  "ativado";
    for (const dia in sexta) {    
        sexta[dia].innerText = "Sexta-Feira";
        
    }
  } else if (botaoFriday.className == "ativado"){
    botaoFriday.classList.remove("ativado");
    let dias = [4, 11, 18, 25]
    for (const dia in sexta) {    
        sexta[dia].innerText = dias[dia]
    }
  }
}
//Exercício 6:
let  lis  = document.getElementsByClassName("day")
for (let index = 0; index < lis.length; index++) {
  const element = lis[index];
  element.addEventListener("mouseover", mouseouver)
}

function mouseouver (encima){
 
encima.target.style.fontSize  = "30px" 
encima.target.addEventListener("mouseleave", function mouseleave (saindo){
saindo.target.style.fontSize = "20px"
})
}

//Exercicio7

function Exercicio7 (string){
  let myTasks = document.querySelector(".my-tasks")
  let tarefa = document.createElement("span")
  tarefa.innerText = string
  
  myTasks.appendChild(tarefa)
}

//Exercício 8:

function color (cor){
  let myTasks = document.querySelector(".my-tasks")
  let divQueRi = document.createElement("div")
  divQueRi.className = "task"
  divQueRi.style.backgroundColor = cor
  myTasks.appendChild(divQueRi)
 
}

//Exercicio 9:

let task = document.querySelector(".task")
task.addEventListener("click", semideia)

function semideia(){
  if (task.className != "task selected"){
    task.className += " selected"
   
  }else if (task.className == "task selected"){
    task.classList.remove("selected")
  }
}

//Exercicio 10
//Referência que me salvou nesse exercício: https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle

let day = document.getElementsByClassName("day")
for (const li in day) {
  
    day[li].addEventListener("click", selected)
    
  
}


function selected (tarta){
  if (task.className == "task selected"){
    let cor = window.getComputedStyle(task).backgroundColor
   
    if(window.getComputedStyle(tarta.target).color != cor  ){
    tarta.target.style.color = cor
  }else if(window.getComputedStyle(tarta.target).color == cor){
        tarta.target.style.color = "rgb(119,119,119)" 
       
    }
  }
}

function brasil (){
  let input = document.querySelector("#task-input")
  
  
   
    let button = document.querySelector("#btn-add")
    
    button.addEventListener("click", function (){
      let divMyTask = document.querySelector(".tasks-container")
      let filhin = document.createElement("div")
     divMyTask.appendChild(filhin);
      
      let span = document.createElement("h2");
      if(input.value.length == 0){
        alert("Adicione um texto, idiota.")
      } else {
      span.innerText = input.value 
     console.log(input.value.length)
     
  
      filhin.appendChild(span)
    }
    })
  
}
//Referência: https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
function EUA (){
  let input = document.querySelector("#task-input")
  
    input.addEventListener("keyup", function (){
      if (event.keyCode === 13){
      let divMyTask = document.querySelector(".tasks-container")
      let filhin = document.createElement("div")
     divMyTask.appendChild(filhin);
      
      let span = document.createElement("h2");
      if(input.value.length == 0){
        alert("Adicione um texto, idiota.")
      } else {
      span.innerText = input.value 
     console.log(input.value.length)
     
  
      filhin.appendChild(span)
    }
    }
  })
  
}
