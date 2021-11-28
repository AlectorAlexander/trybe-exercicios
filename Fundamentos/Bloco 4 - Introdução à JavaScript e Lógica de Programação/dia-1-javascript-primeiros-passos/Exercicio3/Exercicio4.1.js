function maioridade (a,b,c){
    const um = a;
    const dois = b;
    const tres = c;
    var resultado;
    if(um > dois && um > tres){
        resultado = um;
    }else if (dois > um && dois > tres){
        resultado = dois;
    }else if (tres > um && dois < tres){
        resultado = tres;
    } else {
        resultado = "Não me disseram o que fazer nesse caso. Desculpe-me. Mas vai uma dica de como dar cambolhota: Você vai precisar de um colchonete ou pelo menos um carpete espaçoso para dar a cambalhota. Não tente fazer a técnica em pisos de azulejo, concreto ou madeira, pois o risco de acidentes é enorme."
    }
    return resultado
    }