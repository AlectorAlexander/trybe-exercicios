const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
  return arrays.reduce((acmlt, thing) => acmlt.concat(thing), [])
  }

  console.log(flatten())