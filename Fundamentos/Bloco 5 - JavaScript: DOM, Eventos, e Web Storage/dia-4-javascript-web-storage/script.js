//definindo configurações iniciais da página
let mundo = document.getElementById("mundo")
mundo.style.textAlign  = "center"
mundo.style.backgroundColor = localStorage.getItem('BackgroundColor')
mundo.style.color = localStorage.getItem('TextColor')
mundo.style.fontSize = localStorage.getItem('tamanhoDaFonte')
mundo.style.lineHeight = localStorage.getItem('espaço')
mundo.style.fontFamily = localStorage.getItem('fonte')
let inputs = document.getElementById("inputs")
inputs.style.display = "flex"
inputs.style.justifyContent = "space-between"



//             criando os elementos
//BackgroundColor

let Ground = document.createElement("div")
Ground.className = "BackGroundColor"
let h4B = document.createElement("h4")
h4B.innerText = "BackgroundColor"
let groundColor = document.createElement("input")
groundColor.type = "color"
groundColor.value = localStorage.getItem("BackgroundColor")
inputs.appendChild(Ground)
Ground.appendChild(h4B)
Ground.appendChild(groundColor)

//TextColor
let TextColor = document.createElement("div")
TextColor.className = "TextColor"
let h4C = document.createElement("h4")
h4C.innerText = "TextColor"
let inputTextColor = document.createElement("input")
inputTextColor.type = "color"
inputTextColor.value = localStorage.getItem("TextColor")


inputs.appendChild(TextColor)
TextColor.appendChild(h4C)
TextColor.appendChild(inputTextColor)

//FonteTamanho
let tamanho = document.createElement("div")
tamanho.className = "TextColor"
let h4T = document.createElement("h4")
h4T.innerText = "Tamanho em pixels"
let inputTamanhoFonte = document.createElement("input")

inputs.appendChild(tamanho)
tamanho.appendChild(h4T)
tamanho.appendChild(inputTamanhoFonte)

//EspaçamentoEntreLinhas
let espaçamento = document.createElement("div")
espaçamento.className = "espaçamento"
let h4E = document.createElement("h4")
h4E.innerText = "Espaço entre Linhas"
let inputEspaço = document.createElement("input")

inputs.appendChild(espaçamento)
espaçamento.appendChild(h4E)
espaçamento.appendChild(inputEspaço)

//FonteTexto
let divFonte = document.createElement("div")
divFonte.className = "font"
let h4F = document.createElement("h4")
h4F.innerText = "Fonte do texto"
let inputFonte = document.createElement("input")


inputs.appendChild(divFonte)
divFonte.appendChild(h4F)
divFonte.appendChild(inputFonte)

//        Criando as configurações dos elementos:

//BackgroundColor
groundColor.addEventListener("mouseleave", BackgroundColor)

function BackgroundColor (){
    
        
        let cor = groundColor.value  
        localStorage.setItem('BackgroundColor', cor);
        console.log(localStorage.getItem('BackgroundColor'))
        mundo.style.backgroundColor = localStorage.getItem('BackgroundColor')
 
    
}

//TextColor
inputTextColor.addEventListener("mouseleave", TextColorr)

function TextColorr (){
   
        
        let cor = inputTextColor.value  
        localStorage.setItem('TextColor', cor);
        mundo.style.color = localStorage.getItem('TextColor')
 
    
}

//TamanhoFonte
inputTamanhoFonte.addEventListener("keyup", TextSize)

function TextSize (){
    if (event.keyCode === 13){
        if (isNaN(inputTamanhoFonte.value) || inputTamanhoFonte.value > 80){
            alert("Apenas escreva um número de 0 a 80, idiota")
    } else {
        let tamanhoDaFonte = inputTamanhoFonte.value  + "px"
        localStorage.setItem('tamanhoDaFonte', tamanhoDaFonte);
        mundo.style.fontSize = localStorage.getItem('tamanhoDaFonte')
        

        
    }
 
    }
}

//EspaçamentoEntreLinhas
inputEspaço.addEventListener("keyup", EspaçamentoEntreLinhas)

function EspaçamentoEntreLinhas (){
    if (event.keyCode === 13){
        if (isNaN(inputEspaço.value) || inputEspaço.value > 80){
            alert("Apenas escreva um número de 0 a 80, idiota")
    } else {
        let TamanhoEspaçoLinhas = inputEspaço.value  + "px"
        localStorage.setItem('espaço', TamanhoEspaçoLinhas);
        mundo.style.lineHeight = localStorage.getItem('espaço')
        

        
    }
 
    }
}

////FonteTexto
inputFonte.addEventListener("keyup", FonteDoTexto)

function FonteDoTexto(){
    if (event.keyCode === 13){
        let fonteTexto = inputFonte.value
        localStorage.setItem('fonte', fonteTexto);
        mundo.style.fontFamily = localStorage.getItem('fonte')
        

        
 
    }
}
