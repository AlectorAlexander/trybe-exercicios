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
    let lis = idays.children[i];
    let dias = lis.innerText
     if (dias == 24 || dias == 25 || dias == 31){
       lis.className += " holiday "
     }
     if (dias == 4 || dias == 11 || dias == 18 || dias == 25){
      lis.className += " friday"
    }
   }
  }
  
  
  
  
