
const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
      let tudoJunto =  names.reduce((a, b) => a + b);
      return tudoJunto.reduce((a, b) => {  if (b === 'a' || b === 'A') return a + 1;
      return a;
      }
      ), []} 
  console.log(containsA());


  