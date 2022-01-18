function encode(string) {
    for (let index = 0; index < string.length; index++) {
      
   
    string = string.replace(/a/g, "1");
    string = string.replace(/e/g, "2");
    string = string.replace(/i/g, "3");
    string = string.replace(/o/g, "4");
    string = string.replace(/u/g, "5");
  } 
      
  return string
  } 
  
  function decode(string) {
    for (let index = 0; index < string.length; index++) {
    string = string.replace = string.replace(/1/g, "a")
    string = string.replace = string.replace(/2/g, "e")
    string = string.replace = string.replace(/3/g, "i")
    string = string.replace = string.replace(/4/g, "o")
    string = string.replace = string.replace(/5/g, "u")
  } 
      
  return string
  }

  const functions = { encode, decode };
  module.exports = functions;