
const action = (a, b, c) => {
    const promise = new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
            return reject(new Error('Numbers only'))
        }
    const result = (a + b) * c;

    if (result < 50) {
        return reject(new Error('Valor baixo'))
    } 
    return resolve(result);
    }
    )
    return promise;
}

action('s', 25, 1)
.then((resolve) => console.log(resolve))
.catch((error) => console.log(error.message));
