const fs = require('fs').promises

function PsOrNg (number) {
    if (typeof number !== 'number') {
        throw new Error('O parâmetro deve ser do tipo Number')
    }
    try {
    if (number > 0 ) {
    return 'positivo'
    }
    else if (number < 0 ) {
    return 'negativo'
    }
    else if (number === 0 ) {
    return 'neutro'
    }
  } catch (e) {
    console.log(e.message)
  }
}

async function writerFile(nomeDoArquivo, texto) {
    try {
        await fs.writeFile(nomeDoArquivo, texto)
        return 'ok'
    } catch (error) {
        return error.message
    }
}


module.exports = { PsOrNg, writerFile }; 