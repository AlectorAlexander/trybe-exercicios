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
  
  // Escreva seu código abaixo.

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  //Exercicio1

  for (let index = 0; index < dezDaysList.length; index++) {
    var dias = dezDaysList[index]
    var lista = document.createElement("li")
    
    lista.innerText = dias;
    
       lista.className = "day"
      
  
    var idays = document.getElementById("days");
     idays.appendChild(lista)
     if (index == dezDaysList.length -1){
       vai ()
     }
  }
  function vai () {
    
   for (i = 0; i <= idays.childElementCount; i += 1){
    if (i == idays.childElementCount){
      CriaButao()
    }
    var lis = idays.children[i];
    let dias = lis.innerHTML
     if (dias == 24 || dias == 25 || dias == 31){
       lis.className += " holiday"
     }
     if (dias == 4 || dias == 11 || dias == 18 || dias == 25){
      lis.className += " friday"

     
     }
    
   }
  }
  
  //Exercicio2
  function CriaButao(){
    
  var botao = document.createElement("button");
  botao.innerText = "Feriados"
  let botaoContainer = document.querySelector(".buttons-container");
  botaoContainer.appendChild(botao);
  botao.id = "btn-holiday";

  //Exercicio3

  botao.addEventListener("click", function() {
 
var holiday = document.querySelectorAll(".holiday");
  for (let holy = 0; holy < holiday.length; holy++) {
    const element = holiday[holy];
    if (element.className != "day holiday green" && element.className != "day holiday friday green") {
    element.style.backgroundColor = "green"
  element.className += " green"
   } else {
     element.classList.remove("green")
     element.style.backgroundColor = "#eee"
   }
}
}
//if 
//  console.log("cu")
//for (let holy = 0; holy < holiday.length; holy++) {
//  const element = holiday[holy];
// 
//
//    holiday.classList.remove("gray")
//    holiday.className += "green"
//  element.style.backgroundColor = "green"
//
  


//  }
//}
  
)
  
  
}

  

function desConfigButao (){
  var holiday = document.querySelectorAll(".holiday");
  for (let holy = 0; holy < holiday.length; holy++) {
    const element = holiday[holy];
    
    element.style.backgroundColor = "white"
  
    
  }
  botao.addEventListener("click", CriaButao)
  }
  