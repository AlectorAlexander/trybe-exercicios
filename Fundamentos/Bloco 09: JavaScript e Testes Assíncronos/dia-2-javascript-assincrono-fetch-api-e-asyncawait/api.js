const API_URL = 'https://api.coincap.io/v2/assets';
const fetch = require('node-fetch');

const cripto = () => {
    const myObject = {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    };
  const fat = fetch(API_URL, myObject)
       .then(response => response.json())
       .then(data =>document.getElementById("cripto").innerText)
}

console.log(fetch);
  