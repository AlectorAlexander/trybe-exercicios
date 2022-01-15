let roses;
let indice;
let toSemIdeia = (frase, xis) => {
    let resultado = ""
    roses = frase.split(" ")
    for (const i in roses) {
   if (roses[i] == "x") {
    roses.splice(i, 1, xis);
   }
   resultado +=  `${roses[i]} `
    }
    console.log(resultado)
return resultado
}
toSemIdeia("A Trybe exige que vc x", "Não Conte Pro Teu Pai")

