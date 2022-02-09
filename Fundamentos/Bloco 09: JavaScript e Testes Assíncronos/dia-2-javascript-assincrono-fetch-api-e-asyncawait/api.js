
const API = 'https://api.coincap.io/v2/assets';
const crip = document.getElementById('crip')

const cripto = async () => {
const coins = await fetch(API)
       .then(response => response.json())
       .then(data => data.data)
       .catch((error) =>  error.toString())
       
    return coins;
}

const realCoins = async () => {
 const coins = await cripto();
 
 coins.forEach((element) => {
   const numero = JSON.parse(element.priceUsd)
 
const li = document.createElement('li')
li.innerText =  `${element.name} (${element.symbol}): ${numero.toFixed(2)}`
crip.appendChild(li);
});
console.log("deu");
}

window.onload = () => realCoins();