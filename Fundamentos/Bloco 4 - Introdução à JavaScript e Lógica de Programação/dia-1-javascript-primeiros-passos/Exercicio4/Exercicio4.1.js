function serasa (num){



    var resultado;
    if(num > 0){
        resultado = "positive";
    }else if (num < 0){
        resultado = "negative";
    }else if (num == 0){
        resultado = "liberdade poética";
    } else {
        resultado = "Não me disseram o que fazer nesse caso. Desculpe-me. Mas vai uma dica de como dar cambolhota: Você vai precisar de um colchonete ou pelo menos um carpete espaçoso para dar a cambalhota. Não tente fazer a técnica em pisos de azulejo, concreto ou madeira, pois o risco de acidentes é enorme."
    }
    return resultado
    }