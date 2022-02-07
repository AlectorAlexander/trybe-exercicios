// apiScript.js
const joke = document.getElementById('jokeContainer')
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: {'Accept': 'application/json'}
  }
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => joke.innerText = data.joke);
};

window.onload = () => fetchJoke();
