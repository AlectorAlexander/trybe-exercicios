function SeparaTudo (frase) {
    let palavras = frase.split(" ")
    let TamanMin = 0
    let resultado;

    for (const letras of palavras) {
        if (letras.length > TamanMin){
           TamanMin = letras.length
           resultado = letras
        }
    }
return resultado
}

console.log(SeparaTudo("Vendendo coca na igreja. SenhoraseSenhores Jesus sou seu irmão caçula, me proteja"))