function techList(tech, name) {
  
    let vazio = "Vazio!"
    if (tech.length >= 1) {
      var array = [];
       tech.sort()
      for (let i = 0; i < tech.length; i++) {
        const element = tech[i]
        
        array.push({
          tech: element,
          name: name, 
        });
      }array
    }else{
      var array = "Vazio!"
    }
   
   return array;
  
  }
  
  module.exports = techList