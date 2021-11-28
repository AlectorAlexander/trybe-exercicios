function ConversorDeNota (nota){
   
    var retorno
   if (nota >= 90 && nota < 100) {
        
            retorno = "A"
   }else if(nota >= 80 && nota < 100){
                retorno = "B"}
                else if( nota >= 70 && nota < 100){
                retorno = "C"}
                else if( nota >= 60 && nota < 100){
                retorno = "D"}
               else if( nota >= 50 && nota < 100){
                retorno = "E"}
                else if( nota < 50 && nota > 0){
                retorno = "F"}
                else{
            retorno = "errorQuatrocentos-eQuatro"}
            
        
        return retorno;
}