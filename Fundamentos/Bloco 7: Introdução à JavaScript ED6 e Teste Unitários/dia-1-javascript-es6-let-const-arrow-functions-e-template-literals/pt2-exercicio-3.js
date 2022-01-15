let contador = document.getElementById("contador")

let clickCount = 0
document.querySelector("#btn").addEventListener("click", () => contador.innerHTML = clickCount += 1);